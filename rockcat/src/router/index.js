import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import LeaderView from '../views/LeaderBoardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainView,
    },
    {
      path: "/lb",
      name: "lb",
      component: LeaderView,
    },
  ],
});

export default router
