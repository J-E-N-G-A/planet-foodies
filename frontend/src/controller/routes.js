import { createRouter, createWebHistory } from 'vue-router'
// views
const routes = [
	{ path: "/", component: () => import('../views/Home.vue') },	
	{ path: "/result", component: import('../views/Result.vue') },	
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router