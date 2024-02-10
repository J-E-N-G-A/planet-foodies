<script setup>
import { ref, onMounted } from 'vue';
import createGlobe from 'cobe';

const GLOBE_SIZE = 2000
const el = ref();
const phi = ref(0);

onMounted(() => {
  const globe = createGlobe(el.value, {
    devicePixelRatio: 2,
    width: GLOBE_SIZE*2,
    height: GLOBE_SIZE*2,
    phi: 0,
    theta: 0.5,
    dark: 0.8,
    diffuse: 1.2,
    mapSamples: 5000,
    mapBrightness: 6,
    baseColor: [0.6, 0.5, 0.7],
    markerColor: [0.1, 0.8, 1],
    glowColor: [.6, .5, 1],
    markers: [
      // longitude latitude
      { location: [41.8781, -87.6298], size: 0.1 },
    ],
    onRender: (state) => {
      // Called on every animation frame.
      // state will be an empty object, return updated params.
      state.phi = phi.value;
      phi.value += 0.03;
    },
  });
});

</script>
<template>
	<div>
		<h1>Result</h1>
		<canvas id="globe" ref="el"></canvas>
	</div>
</template>

<style scoped>
#globe {
  position: absolute;
  top:0%;
  right:0%;
  width: 1000px; /* GLOBE_SIZE */
  height: 1000px; /* GLOBE_SIZE */
  z-index: 0;
}
</style>