import { createRouter, createWebHashHistory } from 'vue-router'

// views
const routes = [
	{ path: `/`, component: () => import('../views/Home.vue') },	
	{ path: `/result`, component: import('../views/Result.vue') },	
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router