import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Result from '../views/Result.vue'
import Map from '../views/Resturant.vue'
import PromptResponse from '../views/PromptResponse.vue'

// views
const routes = [
	{ path: `/`, component: () => Home },	
	{ path: `/result`, component: Result },
	{ path: `/maps`, component: Map },
	{ path: `/prompt-response`, component: PromptResponse },
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

router.onError((error, to) => {
	if (
		error.message.includes('Failed to fetch dynamically imported module') ||
		error.message.includes('Importing a module script failed')
	) {
		if (!to?.fullPath) {
		window.location.reload();
		} else {
		window.location = to.fullPath;
		}
	}
})

export default router