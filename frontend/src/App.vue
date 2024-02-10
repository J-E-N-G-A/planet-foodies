<script setup lang="ts">
import { ref, onMounted } from 'vue';
import createGlobe from 'cobe';
import { VmButton, VmContainer } from 'vue3-material';

const el = ref();
const phi = ref(0);

onMounted(() => {
  const globe = createGlobe(el.value, {
    devicePixelRatio: 2,
    width: 300 * 2,
    height: 300 * 2,
    phi: 0,
    theta: 0,
    dark: 1,
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [0.3, 0.3, 0.3],
    markerColor: [0.1, 0.8, 1],
    glowColor: [1, 1, 1],
    markers: [
      // longitude latitude
      { location: [41.8781, -87.6298], size: 0.3 },
    ],
    onRender: (state) => {
      // Called on every animation frame.
      // state will be an empty object, return updated params.
      state.phi = phi.value;
      phi.value += 0.01;
    },
  });
});
</script>

<template>
  <div class="app">
    <h1 id="Foodie">
      
      Welcome to Planet Foodie
      <div class="Welcome__enable">
        At this planet, we want to be able to make sure you are able to eat out with friends.
      </div>
    </h1>
    <canvas :style="{ width: '300px', height: '300px' }" ref="el"></canvas>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  background: black;
  color: white;
  font-family: sans-serif;
  text-align: center;
}

.app {
  display: grid;
  place-items: center;
  place-content: center;
  height: 100vh;
}

#Foodie {
  absolute: absolute;
  top: 100px;
  font-size: 60px;
}
</style>