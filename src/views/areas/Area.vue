<template lang="pug">
div.three(ref="three")
</template>

<script lang="ts">
/* eslint no-param-reassign: "off" */

import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
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

  public renderLoop = true;

  // loader
  public fbxLoader = new FBXLoader();

  // area data
  public area: AreaDetailList | null = null;

  public root = '';

  public get fbx() {
    return `models/roots/${this.root}/root.fbx`;
  }

  public beforeMount() {
    this.area = this.dataManager.areaDetailById[this.$route.query.iAreaID as string];
    if (!this.area) {
      this.$router.push({ name: 'Areas' });
      return;
    }

    this.root = this.$route.query.root as string;

    this.initializeCamera().initializeLights();
  }

  public mounted() {
    this.loadFbx().initializeRenderer().initializeControlls().animate();
    window.addEventListener('resize', this.resize);
  }

  public resize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };

  public beforeDestroy() {
    this.beforeUnmount();
  }

  public beforeUnmount() {
    this.renderLoop = false;
    window.removeEventListener('resize', this.resize);
  }

  private initializeCamera() {
    this.camera.position.set(5, 5, -20);
    return this;
  }

  private initializeLights() {
    if (this.area.iAreaID === 3) {
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
      ].map((p) => p.toLocaleLowerCase());
      object.traverse((child: Group & Object3D & Mesh) => {
        if (process.env.NODE_ENV !== 'production') {
          console.log(child.name);
        }
        // they reuse iAreaId === 5 map for the sea effect, required to hide MapArea 5
        if (this.area.iAreaID === 6) {
          filters.push('MapArea_05'.toLocaleLowerCase());
        }

        if (filters.some((p) => child.name.toLocaleLowerCase().includes(p))) {
          if (process.env.NODE_ENV !== 'production') {
            console.log('^^^^^^^^^^ filtered ^^^^^^^^^^');
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
    });
    return this;
  }

  private initializeRenderer() {
    const container = this.$refs.three as HTMLElement;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    container.appendChild(this.renderer.domElement);
    return this;
  }

  private initializeControlls() {
    this.controls.target.set(0, 0, 0);
    this.controls.update();
    return this;
  }

  private animate = () => {
    if (this.renderLoop) {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    }
    return this;
  }
}
</script>

<style lang="sass" scoped>
.three
  overflow: hidden
  z-index: 99999
</style>
