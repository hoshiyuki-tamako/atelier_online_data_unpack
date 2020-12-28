<template lang="pug">
div.three(ref="three")
</template>

<script lang="ts">
/* eslint no-param-reassign: "off" */

import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';
import {
  Scene,
  AmbientLight,
  PerspectiveCamera,
  Group,
  Object3D,
  Mesh,
  WebGLRenderer,
} from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { List as AreaDetailList } from '@/master/areaDetail';

@Component({
  components: {
  },
})
export default class extends VueBase {
  // render
  public scene = new Scene();

  public light = new AmbientLight(0xffffff);

  public camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);

  public renderer = new WebGLRenderer({ antialias: true });

  public controls = new OrbitControls(this.camera, this.renderer.domElement);

  public renderLoop: number | null = null;

  // loader
  public fbxLoader = new FBXLoader();

  // area data
  public area: AreaDetailList | null = null;

  public root = '';

  public battleArea = '';

  public dungeon = '';

  public fieldDungeon = '';

  public raw = '';

  public get fbx() {
    if (this.root) {
      return `models/roots/${this.root}/root.fbx`;
    }

    if (this.battleArea) {
      return `models/battleAreas/${this.battleArea}/${this.battleArea}.fbx`;
    }

    if (this.dungeon) {
      return `models/dungeons/${this.dungeon}/${this.dungeon.replace(/\s*\(\d+\)/, '')}.fbx`;
    }

    if (this.fieldDungeon) {
      return `models/fieldDungeons/${this.fieldDungeon}/${this.fieldDungeon.replace(/\s*\(\d+\)/, '')}.fbx`;
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
        'Collision', 'EnvSound', 'Spawner', 'System',
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

        if (child.isMesh) {
          for (const material of Array.isArray(child.material) ? child.material : [child.material]) {
            material.alphaTest = 1;
          }
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      this.scene.add(object);
    }, undefined, (err) => {
      this.$message.error(err.error);
      console.error(err);
    });

    return this;
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

    const targetFps = 1;
    this.renderLoop = window.setInterval(this.render, 1000 / targetFps);
  }

  private render = () => {
    if (!document.hidden) {
      requestAnimationFrame(() => {
        this.renderer.render(this.scene, this.camera);
      });
    }
  }
}
</script>

<style lang="sass" scoped>
.three
  overflow: hidden
  z-index: 99999
</style>
