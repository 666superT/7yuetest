import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'
import vuexp from 'vuex-persistedstate'
import permission from './modules/permission'
export default createStore({
  getters,
  modules: {
    user,
    permission
  },
  plugins: [vuexp()]
})
