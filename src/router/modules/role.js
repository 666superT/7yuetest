import layout from '../../layout'
export default {
  path: '/sys',
  name: 'sys:role:list',
  component: layout,
  redirect: '/sys/user',
  meta: { title: '系统管理', icon: '1' },
  children: [
    {
      path: '/sys/role',
      name: 'sys:role:list',
      component: () => import('../../views/role'),
      meta: { title: '角色管理', icon: '1' }
    }
  ]
}
