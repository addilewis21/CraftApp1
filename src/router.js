import { createRouter, createMemoryHistory } from 'vue-router'

import HomeView from './HomeView.vue'
import CreateView from './CreateView.vue'
import ProjectView from './ProjectView.vue'

const routes = [
  { path: '/', redirect: '/Home' },
  { path: '/Home', component: HomeView },
  { path: '/Create', component: CreateView },
  { path: '/project', component: ProjectView },
  { 
    path: '/Project/:id/:craftType/:patternName/:image/:projectId', 
    component: ProjectView, 
    name: 'Project', 
    props: route => ({ ...route.params }) 
  }, 
]
const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router