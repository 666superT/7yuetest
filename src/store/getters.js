const getters = {
  authorization: (state) => state.user.authorization || '',
  menuList: (state) => state.user.menuList || []
}
export default getters
