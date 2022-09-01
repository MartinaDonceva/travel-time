import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Category from "@/views/Category";
import Quiz from "@/views/Quiz";
import Register from "@/views/Register";
import Login from "@/views/Login";

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
    },
    {
        path: '/category/quiz',
        name: 'quiz',
        component: Quiz
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]

const router = new VueRouter({
    routes
})

export default router
