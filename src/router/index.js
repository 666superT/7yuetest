import { createRouter, createWebHashHistory } from 'vue-router'
import menu from './modules/menu'
import user from './modules/user'
import role from './modules/role'
import tool from './modules/tool'
import layout from '../layout'
export const publicRoutes = [
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
        meta: { title: '首页', icon: '1' }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/404')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('../views/401')
      }
    ]
  }
]

export const privateRoutes = [menu, user, role, tool]
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
