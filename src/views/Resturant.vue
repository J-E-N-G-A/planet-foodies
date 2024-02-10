<script setup>
	import Map from '../components/Map.vue';
	import Globe from "../assets/globe.png"

</script>
<template>
	<h1>Map</h1>
	<div class="wrapper">
		<div>
			<Map/>
		</div>
		<div>
			<img id="globe" :src="Globe"/>
		</div>
	</div>

</template>
<style>
	.wrapper {
  display: grid;
  grid-template-columns: 50% 50%;
}

	
#globe {
  position: relative;
  width: 600px;
  height: 500px;
}
</style>