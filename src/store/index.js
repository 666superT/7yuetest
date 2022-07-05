import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'
import vuexp from 'vuex-persistedstate'
export default createStore({
  modules: {
    user
  },
  getters,
  plugins: [vuexp()]
})
