<script setup>
import { ref } from 'vue'
import { ElButton } from 'element-plus'

import NutrionalForm from "../components/Form.vue"

const dialogVisible = ref(false)

const handleClose = (done) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch((err) => {
      // catch error
    })
}
</script>

<script>
export default {
    name: "FormPopup",
    inheritAttrs: false,
    customOptions: {}
}
</script>

<template>
    <el-button type="danger" @click="dialogVisible = true">
        Click me to see the form!
      </el-button>
      <el-dialog
        v-model="dialogVisible"
        title="We help with your eating habits."
        width="300"
        :before-close="handleClose"
        class="dialog"
        style="max-width: 85%"
      >
        <NutrionalForm />
        <!-- <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogVisible = false">
              Confirm
            </el-button>
          </div>
        </template> -->
      </el-dialog>
</template>

<style scoped lang="scss">
</style>