const getters = {
  authorization: (state) => state.user.authorization,
  menuList: (state) => state.user.menuList,
  userInfo: (state) => state.user.userInfo,
  tags: (state) => state.user.tagsList || ''
}
export default getters
