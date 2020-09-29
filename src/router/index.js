import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Project from "@/views/Project";
import Login from "@/views/Login";
import NotFound from "@/views/NotFound";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project/:projectId',
    name: 'Project',
    component: Project
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  /*{
    path: '*',
    name: 'NotFound',
    component: NotFound
  }*/
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
