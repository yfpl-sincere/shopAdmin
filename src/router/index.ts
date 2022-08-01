import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'homeIndex',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/login',
    name: 'LoginIndex',
    component: () => import('../views/login/index.vue')
  }
] // 路由规则
const router = createRouter({
  history: createWebHashHistory(), // 路由模式 history hash
  routes // 路由规则
})

export default router
