<script>
import { ElButton, ElHeader } from 'element-plus'
</script>

<template>
	<div class="primary">
		<Elheader class="header">
			<el-button type="primary">nav goes here</el-button>
		</Elheader>
		<RouterView />
	</div>
</template>

<style lang="scss">
.primary {
	width: 100%;
	height: auto;
}
</style>