import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './HomeView.vue'
import CreateView from './CreateView.vue'
import ProjectView from './ProjectView.vue'

const routes = [
  { path: '/Home', component: HomeView },
  { path: '/Create', component: CreateView },
  { path: '/Project', component: ProjectView }, 
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router