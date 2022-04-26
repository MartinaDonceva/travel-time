import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Category from "@/views/Category";
import Quiz from "@/views/Quiz";
import FinishedQuiz from "@/views/FinishedQuiz";

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
    path: '/category/quiz/finishedQuiz',
    name: 'finishedQuiz',
    component: FinishedQuiz
  }
]

const router = new VueRouter({
  routes
})

export default router
