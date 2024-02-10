<script setup>
import { ref, onMounted, ReactiveEffect, onUnmounted } from 'vue';
import createGlobe from 'cobe';

const props = defineProps({
  size: Number,
  center: Boolean
})

var GLOBE_SIZE = props.size
const el = ref();
const phi = ref(0);
var globe;
onMounted(() => {
  globe = createGlobe(el.value, {
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

onUnmounted(() => {
  globe.destroy();
});

</script>
<template>
	<canvas v-if="props.center" id="globeCentered" ref="el"></canvas>
    <canvas v-if="!props.center" id="globeRight" ref="el"></canvas>
</template>

<style scoped>
#globeRight {
  position: absolute;
  top:0%;
  right:0%;
  width: 1000px; /* GLOBE_SIZE */
  height: 1000px; /* GLOBE_SIZE */
  z-index: 0;
}

#globeCentered {
  position: absolute;
  top:20%;
  width: 1000px; /* GLOBE_SIZE */
  height: 1000px; /* GLOBE_SIZE */
}
</style>