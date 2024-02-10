<script setup>
import { reactive } from 'vue'
import { ElForm, ElFormItem, ElSelect, ElOption, ElCol, ElDatePicker, ElTimePicker, ElSwitch, ElCheckboxGroup, ElCheckbox, ElRadioGroup, ElRadio, ElButton } from 'element-plus'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
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
    <el-form :model="form" label-width="120px">
    <el-form-item label="Activity name">
        <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Submit</el-button>
      <!-- <el-button>Clear</el-button> -->
    </el-form-item>
  </el-form>
</template>