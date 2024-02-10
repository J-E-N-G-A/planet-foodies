<script setup>
import { ref, onMounted } from 'vue';
import createGlobe from 'cobe';
import { VmButton, VmContainer } from 'vue3-material';

import JuliusCat from "../assets/SpaceCatsJulius.png"
import EddyCat from "../assets/SpaceCatsEddy.png"
import AniCat from "../assets/SpaceCatsAni.png"
import GerardCat from "../assets/SpaceCatsGerard.png"
import ShaneCat from "../assets/SpaceCatsShane.png"

const GLOBE_SIZE = 1000
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
      phi.value += 0.01;
    },
  });
});


</script>
<template>
	 <div class="app">
		<h1 id="BigFoodie">
		Welcome to Planet Foodie 
		</h1>
		<div id="Foodie">
			<p>At this planet, we want to be able to make sure you are able to eat out with friends. (now with space cats)</p>
			<router-link to="/result">Want to learn more? Click here</router-link>
		</div>
		<canvas id="globe" ref="el"></canvas>
		<img id="cat-julius" :src="JuliusCat"/>
		<img id="cat-eddy" :src="EddyCat"/>
		<img id="cat-shane" :src="ShaneCat"/>
		<img id="cat-gerard" :src="GerardCat"/>
		<img id="cat-ani" :src="AniCat"/>
	</div>
</template>

<style scoped>
html,
body {
  margin: 0;
  background-image: url("../src/assets/space.jpg");
  color: white;
  font-family: sans-serif;
  text-align: center;
}

.app {
  display: grid;
  place-items: center;
  place-content: center;
  height: 50%;
}

@font-face {
  font-family: Space;
  src: url("../src/assets/spacey-font.otf");
}

#Foodie {
  font-size: 50px;
  z-index: 1;
  font-family: Space;
  width: 80%;
}

#BigFoodie {
  font-size: 100px;
  z-index: 1;
  font-family: Space;
}

#globe {
  position: absolute;
  top:20%;
  width: 1000px; /* GLOBE_SIZE */
  height: 1000px; /* GLOBE_SIZE */
}


#cat-julius {
  position: absolute;
  left:20%;
  top: 80%;
  width: 200px;
  height: 200px;
  z-index: 2;
}

#cat-eddy {
  position: absolute;
  left:70%;
  bottom: 10%;
  width: 200px;
  height: 200px;
  z-index: 2;
}

#cat-shane {
  position: absolute;
  right:10%;
  top: 70%;
  width: 200px;
  height: 200px;
  z-index: 2;
}

#cat-ani {
  position: absolute;
  right:80%;
  top: 20%;
  width: 200px;
  height: 200px;
  z-index: 2;
}

#cat-gerard {
  position: absolute;
  left:80%;
  bottom: 40%;
  width: 200px;
  height: 200px;
  z-index: 2;
}
</style>