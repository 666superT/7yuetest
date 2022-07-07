<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    :default-active="$route.path"
    text-color="#fff"
    style="height: 100%"
    router
  >
    <Item v-for="(v, i) in menuList" :key="i" :item="v"></Item>
  </el-menu>
</template>

<script setup>
import Item from './Item'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { filterRouters, generateMenus } from '../../utils/router'
import { filterMenuData } from '../../utils/menu'

const router = useRouter()

console.log(router.getRoutes())

const menuList = computed(() => {
  const menu = filterRouters(router.getRoutes())
  return filterMenuData(generateMenus(menu))
})

console.log(menuList)
</script>

<style lang="scss" scoped>
.el-menu {
  overflow-x: hidden;
}
</style>
