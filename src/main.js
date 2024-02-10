import { createApp } from 'vue'
import './style.css'
import Vue3Material from 'vue3-material';
import router from './controller/routes';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'


createApp(App)
	.use(router)
    .use(Vue3Material)
    .use(ElementPlus)
    .mount('#app');
