<script setup>
    import { ElMenu, ElMenuItem } from 'element-plus'
</script>

<script>
	export default {
		name: "PlanetHeader",
		inheritAttrs: false,
    	customOptions: {}
	}
</script>

<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        default-active
        :router="true"
        background-color="#000000"
        text-color="#FFFFFF"
    >
        <el-menu-item  index="/">Home</el-menu-item>
        <el-menu-item  index="/prompt-response">Prompt Response</el-menu-item>
        <el-menu-item  index="/maps">Restaurants Nearby</el-menu-item>
    </el-menu>
</template>