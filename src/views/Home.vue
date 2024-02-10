<script setup>
import Globe from '../components/Globe.vue';
import NutrionalForm from "../components/Form.vue"
import { ElButton } from 'element-plus'

import JuliusCat from "../assets/SpaceCatsJulius.png"
import EddyCat from "../assets/SpaceCatsEddy.png"
import AniCat from "../assets/SpaceCatsAni.png"
import GerardCat from "../assets/SpaceCatsGerard.png"
import ShaneCat from "../assets/SpaceCatsShane.png"

</script>

<script>
import SpaceBackground from "../assets/space.jpg"
import Font from "../assets/spacey-font.otf"
export default {
  data() {
    return {
      bg: SpaceBackground,
      font: Font,
    }
  }
}
</script>

<template>
	 <div class="app">
		<h1 id="BigFoodie">
		Welcome to Planet Foodie 
		</h1>
		<div id="Foodie">
			<p>At this planet, we want to be able to make sure you are able to eat out with friends. (now with space cats)</p>
      <el-button type="danger" @click="dialogVisible = true">
        Click me to see the form!
      </el-button>

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
  background-image: v-bind(bg);
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
  src: v-bind(font);
}

#Foodie {
font-size: 50px;
z-index: 1;
font-family: Space;
width: 80%;
}

#BigFoodie {
font-size: 100px;
z-index: 2;
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
  right:85%;
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

@media screen and (max-width: 600px) {  
  #Foodie {
    font-size: 20px;
    z-index: 1;
    font-family: Space;
    width: 50%;
  }
  
  #BigFoodie {
    font-size: 40px;
    z-index: 1;
    font-family: Space;
  }
  
  #cat-julius {
      position: absolute;
      left:20%;
      top: 80%;
      width: 50px;
      height: 50px;
      z-index: 2;
    }
    
    #cat-eddy {
      position: absolute;
      left:70%;
      bottom: 10%;
      width: 50px;
      height: 50px;
      z-index: 2;
    }
    
    #cat-shane {
      position: absolute;
      right:10%;
      top: 70%;
      width: 50px;
      height: 50px;
      z-index: 20
    }
    
    #cat-ani {
      position: absolute;
      right:70%;
      top: 30%;
      width: 50px;
      height: 50px;
      z-index: 2;
    }
    
    #cat-gerard {
      position: absolute;
      right:10%;
      bottom: 40%;
      width: 50px;
      height: 50px;
      z-index: 2;
    }
}


</style>