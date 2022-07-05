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
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const menuList = computed(() => {
  return store.getters.menuList
})
</script>

<style lang="scss" scoped></style>
