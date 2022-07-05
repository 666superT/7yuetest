<template>
  <template v-if="item && !props.item.children">
    <el-menu-item :index="item.path">
      <template #title>
        <i :class="item.icon"></i>
        <span>{{ item.title }}</span>
      </template>
    </el-menu-item>
  </template>
  <template v-if="props.item && props.item.children">
    <el-sub-menu :index="item.path">
      <template #title>
        <i :class="item.icon"></i>
        <span>{{ item.title }}</span>
      </template>
      <Item
        v-for="(childrenItem, index) in item.children"
        :key="index"
        :item="childrenItem"
      ></Item>
    </el-sub-menu>
  </template>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})
// console.log(props.item)
</script>

<style lang="scss" scoped></style>
