import layout from '../../layout'
export default {
  path: '/sys',
  name: 'sys:menu:list',
  component: layout,
  redirect: '/sys/user',
  meta: { title: '系统管理', icon: '1' },
  children: [
    {
      path: '/sys/menu',
      name: 'sys:menu:list',
      component: () => import('../../views/menu'),
      meta: { title: '菜单管理', icon: '1' }
    }
  ]
}
