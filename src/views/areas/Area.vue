<template lang="pug">
div.area
  div.three(ref="three")
  div.information-container(v-if="root && !(md.mobile() || md.tablet())")
    div.filters
      div.filter
        span FPS
        el-select.fps__select(v-model="targetFps")
          el-option(v-for="fps of fpsOptions" :key="fps" :label="fps" :value="fps")
      div.filter(v-if="enemies.length")
        el-button(@click="loadEnemyModels()") loadModel
    el-collapse(v-model="activeNames" v-if="enemies.length")
      el-collapse-item(v-if="false" :title="$t('敵')" name="pickups")
      el-collapse-item.collapse-item(v-if="enemies.length" :title="$t('敵')" name="enemies")
        p(v-for="{ enemy, gameObject } of enemies" @click="lookAtObject(gameObject)")
          img.icon-small(:src="enemy.icon" :alt="enemy.strName")
          span {{ enemy.strName }}
      el-collapse-item(v-if="false" :title="$t('敵')" name="npcs")
      el-collapse-item(v-if="false" :title="$t('敵')" name="quests")
      el-collapse-item(v-if="false" :title="$t('敵')" name="gimmics")
</template>

<script lang="ts">
/* eslint no-param-reassign: "off" */

import Component from 'vue-class-component';
import {
  Scene,
  AmbientLight,
  PerspectiveCamera,
  Group,
  Object3D,
  Mesh,
  WebGLRenderer,
  Raycaster,
  Color,

  MeshBasicMaterial,
  BoxGeometry,
} from 'three';
import { Interaction } from 'three.interaction/src/index';

import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import MobileDetect from 'mobile-detect';

import { List as AreaDetailList } from '@/master/areaDetail';
import VueBase from '@/components/VueBase';
import { MVList as EnemyMVList } from '@/master/enemy';


type ThreeInteraactionObject3D = { on: (s: string, fn: () => void) => void };

@Component({
  components: {
  },
})
export default class extends VueBase {
  public md = new MobileDetect(window.navigator.userAgent);

  // render
  public scene = new Scene();

  public light = new AmbientLight(0xffffff);

  public camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);

  public renderer = new WebGLRenderer({ antialias: true });

  public controls = new OrbitControls(this.camera, this.renderer.domElement);

  public renderLoop: number | null = null;

  public raycaster = new Raycaster();

  public interaction = new Interaction(this.renderer, this.scene, this.camera);

  // loader
  public fbxLoader = new FBXLoader();

  private fbxLoaderErrorHandler = (err: ErrorEvent) => {
    this.$message.error(err.error);
    console.error(err);
  };

  // area data
  public area: AreaDetailList | null = null;

  public root = '';

  public battleArea = '';

  public dungeon = '';

  public fieldDungeon = '';

  public raw = '';

  // objects
  public enemies = [] as { enemy: EnemyMVList, gameObject: Object3D & ThreeInteraactionObject3D }[];

  // states
  public orginalColors = new Map<MeshBasicMaterial, Color>();

  // UI
  public activeNames = [] as string[];
  public targetFps = 1;
  public fpsOptions = [1, 30];

  public get fbx() {
    if (this.root) {
      return `${this.dataManager.baseServerId}/models/roots/${this.root}/root.fbx`;
    }

    if (this.battleArea) {
      return `${this.dataManager.baseServerId}/models/battleAreas/${this.battleArea}/${this.battleArea}.fbx`;
    }

    if (this.dungeon) {
      return `${this.dataManager.baseServerId}/models/dungeons/${this.dungeon}/${this.dungeon.replace(/\s*\(\d+\)/, '')}.fbx`;
    }

    if (this.fieldDungeon) {
      return `${this.dataManager.baseServerId}/models/fieldDungeons/${this.fieldDungeon}/${this.fieldDungeon.replace(/\s*\(\d+\)/, '')}.fbx`;
    }

    return this.raw;
  }

  public beforeMount() {
    this.area = this.dataManager.areaDetailById[this.$route.query.iAreaID as string];
    this.root = this.$route.query.root as string;
    this.battleArea = this.$route.query.battleArea as string;
    this.dungeon = this.$route.query.dungeon as string;
    this.fieldDungeon = this.$route.query.fieldDungeon as string;
    this.raw = this.$route.query.raw as string;

    if (!(this.root || this.battleArea || this.dungeon || this.fieldDungeon || this.raw)) {
      this.$router.push({ name: 'Areas' });
      return;
    }

    this.initializeCamera().initializeLights();
  }

  public mounted() {
    this.loadFbx().initializeRenderer().initializeControlls().initializeRenderLoop();
    window.addEventListener('resize', this.resize);
  }

  public resize = () => {
    const container = this.$refs.three as HTMLElement;
    this.camera.aspect = container.clientWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, window.innerHeight);
  };

  public beforeDestroy() {
    this.beforeUnmount();
  }

  public beforeUnmount() {
    clearInterval(this.renderLoop);
    window.removeEventListener('resize', this.resize);
  }

  private initializeCamera() {
    this.camera.position.set(5, 5, -20);
    return this;
  }

  private initializeLights() {
    if (this.area?.iAreaID === 3) {
      this.light.intensity = 4;
    } else {
      this.light.intensity = 2;
    }
    this.scene.add(this.light);
    return this;
  }

  private loadFbx() {
    this.fbxLoader.load(this.fbx, (object) => {
      const filters = [
        'Nav',
        'Collision', 'EnvSound', 'System',
        'light',
        'bgmap', 'radar',
      ];

      // they reuse iAreaId === 5 map for the sea effect in some area, required to hide MapArea 5
      if ([6, 106].includes(this.area?.iAreaID)) {
        filters.push('MapArea_05_001');
      }

      // battle areas filter
      filters.push('skillbg');

      // for some reason they put battle_01_001 in iAreaID === 10 map
      if (this.area?.iAreaID === 10) {
        filters.push('battle_01_001');
      }

      if (this.dungeon || this.fieldDungeon) {
        filters.push('door');
      }

      // if raw ignore all filters
      if (this.raw) {
        filters.length = 0;
      }

      object.traverse((child: Group & Object3D & Mesh) => {
        if (filters.some((p) => child.name.toLocaleLowerCase().includes(p.toLocaleLowerCase()))) {
          if (!this.isProduction) {
            console.log(`filtered: ${child.name}`);
          }
          child.visible = false;
          return;
        }

        if (child.name === 'Spawner') {
          for (const c of child.children) {
            if (c.name.toLocaleLowerCase().includes('enemies')) {
              this.loadSpawnerEnemies(c.children);
            }
          }
        }

        if (child.isMesh) {
          for (const material of Array.isArray(child.material) ? child.material : [child.material]) {
            material.alphaTest = 1;
          }
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      this.scene.add(object);
    }, undefined, this.fbxLoaderErrorHandler);

    return this;
  }

  private loadSpawnerEnemies(enemyGameObjects: Object3D[]) {
    for (const enemyGameObject of enemyGameObjects) {
      const enemy = this.dataManager.enemyById[+enemyGameObject.name.split('_')[0]];
      if (enemy?.model) {
        this.enemies.push({ enemy, gameObject: enemyGameObject as Object3D & ThreeInteraactionObject3D });
        const geometry = new BoxGeometry(1, 1, 1);
        const material = new MeshBasicMaterial({ color: new Color() });
        const mesh = new Mesh(geometry, material);
        mesh.visible = false;
        enemyGameObject.add(mesh);
      }
    }
  }

  private loadEnemy(enemy: EnemyMVList, enemyGameObject: Object3D & ThreeInteraactionObject3D) {
    this.fbxLoader.load(enemy.model, (enemyObject) => {
      enemyObject.rotation.x = 0;
      enemyObject.rotation.y = Math.PI;
      enemyObject.rotation.z = Math.PI;

      enemyGameObject.add(enemyObject);
      enemyGameObject.on('click', () => {
        window.open(this.$router.resolve({ name: 'EnemiesEnemy', query: { df: enemy.DF.toString() } }).href, '_blank');
      });
      enemyGameObject.on('mouseover', () => {
        enemyGameObject.traverse((o: Group & Object3D & Mesh) => {
          if (o.isMesh) {
            for (const material of (Array.isArray(o.material) ? o.material : [o.material]) as MeshBasicMaterial[]) {
              if (!this.orginalColors.has(material)) {
                this.orginalColors.set(material, material.color.clone());
              }
              const orginalColor = this.orginalColors.get(material);
              material.color = new Color(
                orginalColor.r + 5,
                orginalColor.g + 5,
                orginalColor.b + 5,
              );
            }
          }
        });
      });
      enemyGameObject.on('mouseout', () => {
        enemyGameObject.traverse((o: Group & Object3D & Mesh) => {
          if (o.isMesh) {
            for (const material of (Array.isArray(o.material) ? o.material : [o.material]) as MeshBasicMaterial[]) {
              if (this.orginalColors.has(material)) {
                material.color = this.orginalColors.get(material);
              }
            }
          }
        });
        this.orginalColors.clear();
      });
    }, undefined, this.fbxLoaderErrorHandler);
  }

  private initializeRenderer() {
    const container = this.$refs.three as HTMLElement;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(container.clientWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    container.appendChild(this.renderer.domElement);
    return this;
  }

  private initializeControlls() {
    this.controls.target.set(0, 0, 0);
    this.controls.update();
    return this;
  }

  private initializeRenderLoop() {
    this.controls.addEventListener('change', this.render);
    this.renderLoop = window.setInterval(this.render, 1000 / this.targetFps);
  }

  private render = () => {
    if (!document.hidden) {
      requestAnimationFrame(() => {
        this.renderer.render(this.scene, this.camera);
      });
    }
  }

  //
  public lookAtObject(obj: Object3D) {
    this.camera.position.set(obj.position.x + 1, obj.position.y + 10, obj.position.z + 1);
  }

  public loadEnemyModels() {
    for (const { enemy, gameObject } of this.enemies) {
      this.loadEnemyModel(enemy, gameObject);
    }
  }

  public loadEnemyModel(enemy: EnemyMVList, gameObject: Object3D & ThreeInteraactionObject3D) {
    gameObject.remove(gameObject.children[0]);
    this.loadEnemy(enemy, gameObject);
  }
}
</script>

<style lang="sass" scoped>
.area
  display: flex

.three
  overflow: hidden
  width: 100%

.information-container
  position: fixed
  right: 0
  top: 0
  min-width: 300px

.collapse-item
  overflow-y: auto
  max-height: 80vh

.fps__select
  width: 100px
</style>
