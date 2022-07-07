import layout from '../../layout'
export default {
  path: '/sys',
  name: 'sys:user:list',
  component: layout,
  redirect: '/sys/user',
  meta: { title: '系统管理', icon: '1' },
  children: [
    {
      path: '/sys/user',
      name: 'sys:user:list',
      component: () => import('../../views/user'),
      meta: { title: '用户管理', icon: '1' }
    }
  ]
}
