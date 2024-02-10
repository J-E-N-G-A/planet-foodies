<script setup>
import { ElButton, ElHeader, ElMain, ElAffix, ElDivider } from 'element-plus'
import PlanetHeader from "./components/MenuHeader.vue"
</script>

<template>
	<div class="primary">
		<ElHeader class="header">
			<ElAffix class="header__affix">
				<PlanetHeader />
				<ElDivider />
			</ElAffix>
		</ElHeader>
		<ElMain>
			<RouterView />
		</ElMain>
	</div>
</template>

<style lang="scss">
.primary {
	width: 100%;
	height: auto;
}

.header {
	
}
</style>