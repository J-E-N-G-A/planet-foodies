import { createRouter, createWebHistory } from 'vue-router'

// loading which view to show - dev or prod mode
const baseURL = import.meta.env.VITE_NODE_ENV === "production"
				? "/planet-foodies/"
				: "/"
console.log({ENV: baseURL})

// views
const routes = [
	{ path: `${baseURL}`, component: () => import('../views/Home.vue') },	
	{ path: `${baseURL}result`, component: import('../views/Result.vue') },	
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router