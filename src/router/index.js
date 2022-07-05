import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '../layout'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'layout',
    component: layout,
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/profile'),
        meta: { title: '首页', icon: '<el-icon><HomeFilled /></el-icon>' }
      }
    ]
  }
]

export const privateRouters = []
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
