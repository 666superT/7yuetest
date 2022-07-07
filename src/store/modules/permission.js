import { publicRoutes, privateRoutes } from '../../router'

export default {
  namespaced: true,
  state: {
    routes: publicRoutes
  },
  mutations: {
    setRoutes(state, routes) {
      state.routes = [...publicRoutes, ...routes]
    }
  },
  actions: {
    filtersRoutes({ commit }, menus) {
      const routes = []
      menus.forEach((v) => {
        const data = privateRoutes.filter((item) => item.name === v)
        routes.push(...data)
      })
      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })
      commit('setRoutes', routes)
      return routes
    }
  }
}
