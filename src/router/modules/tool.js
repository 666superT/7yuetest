import layout from '../../layout'
export default {
  path: '/tool',
  name: 'sys:dict:list',
  component: layout,
  redirect: '/tool/dict',
  meta: { title: '系统工具', icon: '1' },
  children: [
    {
      path: '/tool/dict',
      name: 'sys:dict:list',
      component: () => import('../../views/dict'),
      meta: { title: '数字字典', icon: '1' }
    }
  ]
}
