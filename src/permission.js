import router from './router'
import store from './store'

router.beforeEach(async (to, from, next) => {
  const token = store.getters.authorization
  //如果有token
  if (token) {
    // 跳login就返回跳转时的页面
    if (to.path === '/login') {
      next(from.path)
    } else {
      // 不跳login就看看有没有获取到用户信息和导航栏数据
      const userInfo = store.getters.userInfo
      const navData = store.getters.menuList

      // 如果有用户信息并且有导航栏数据就放行
      if (userInfo && navData) {
        next()
      } else {
        // 如果没有用户信息和导航栏数据就请求
        const res = await store.dispatch('user/getUser')
        const response = await store.dispatch('user/getNav')
        const authoritys = response.data.authoritys
        // 如果有用户信息和导航栏数据就根据权限对比筛选出路由
        if (res && authoritys) {
          const routes = await store.dispatch(
            'permission/filtersRoutes',
            authoritys
          )

          //TODO不存储用户信息，使它每次都会请求新的导航栏
          // 如果筛选出权限的路由就遍历添加到公共路由表
          if (routes) {
            routes.forEach((item) => {
              // console.log(v)
              router.addRoute(item)
            })
            // 并进入要去的路径
            return next(to.path)
          }
        } else {
          // 如果没有用户信息和导航栏信息就返回登录页面
          next('/login')
        }
      }
    }
  } else {
    // 没有token时跳login就放行，不跳login就强制跳login
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
