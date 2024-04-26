import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './HomeView.vue'
import CreateView from './CreateView.vue'
import ProjectView from './ProjectView.vue'

const routes = [
  { path: '/', redirect: '/Home' },
  { path: '/Home', component: HomeView },
  { path: '/Create', component: CreateView },
  { path: '/project', component: ProjectView, name: 'ProjectView' },  // new route
  { path: '/project/:id', component: ProjectView, name: 'ProjectViewWithId', props: true },
  { 
    path: '/:id/:craftType/:patternName/:image/:projectId', 
    component: ProjectView, 
    name: 'ProjectDetails', 
    props: route => ({ ...route.params }) 
  }, 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router