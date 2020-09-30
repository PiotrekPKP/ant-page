import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Project from "@/views/Project";
import Login from "@/views/Login";
import NotFound from "@/views/NotFound";
import Members from "@/views/Members";

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
  {
    path: '/members',
    name: 'Members',
    component: Members
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
