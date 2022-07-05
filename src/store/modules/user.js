export default {
  namespaced: true,
  state: () => ({
    authorization: '',
    menuList: []
  }),
  mutations: {
    setHeaders(state, authorization) {
      state.authorization = authorization
    },
    setMenuList(state, menu) {
      state.menuList = menu
    }
  },
  actions: {}
}
