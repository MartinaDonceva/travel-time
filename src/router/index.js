import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Category from "@/views/Category";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Homepage
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  }
]

const router = new VueRouter({
  routes
})

export default router
