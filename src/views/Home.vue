<script setup>
import Globe from '../components/Globe.vue';
import { VmButton, VmContainer } from 'vue3-material';

import JuliusCat from "../assets/SpaceCatsJulius.png"
import EddyCat from "../assets/SpaceCatsEddy.png"
import AniCat from "../assets/SpaceCatsAni.png"
import GerardCat from "../assets/SpaceCatsGerard.png"
import ShaneCat from "../assets/SpaceCatsShane.png"

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
		<Globe :size="1000" :center="true"></Globe>
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