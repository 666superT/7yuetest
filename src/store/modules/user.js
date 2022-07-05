import { getUserInfo } from '@/api/login'
export default {
  namespaced: true,
  state: () => ({
    authorization: '',
    menuList: [],
    userInfo: ''
  }),
  mutations: {
    setHeaders(state, authorization) {
      state.authorization = authorization
    },
    setMenuList(state, menu) {
      state.menuList = menu
    },
    setUserInfo(state, obj) {
      state.userInfo = obj
    }
  },
  actions: {
    async getUser({ commit }) {
      const res = await getUserInfo()
      // console.log(res)
      commit('setUserInfo', res.data.data)
    },
    handleEdit({ commit }) {
      commit('setHeaders', '')
      commit('setUserInfo', '')
    }
  }
}
