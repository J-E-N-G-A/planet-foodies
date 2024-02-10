<script setup>
import { reactive } from 'vue'
import { ElForm, ElFormItem, ElButton } from 'element-plus'
import { NutritionFunction, ActivityFunction } from "../services/NutrionixAPI.js"

// do not use same name with ref
const form = reactive({
  activity: '',
  food: '',
})

const onSubmit = async (form) => {
    const {activity, food} = JSON.parse(JSON.stringify(form))
    const activityRes = await ActivityFunction(activity)
    const foodRes = await NutritionFunction(food)
    console.log(activityRes, foodRes)
}
</script>

<script>
	export default {
		name: "NutrionalForm",
		inheritAttrs: false,
    	customOptions: {}
	}
</script>

<template>
    <el-form :model="form" label-width="120px" >
    <el-form-item label="What physical activity didja do?">
        <el-input v-model="form.activity" type="textarea" />
    </el-form-item>
    <el-form-item label="What didja eat?">
        <el-input v-model="form.food" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="() => onSubmit(form)">Submit</el-button>
      <!-- <el-button>Clear</el-button> -->
    </el-form-item>
  </el-form>
</template>