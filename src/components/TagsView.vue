<template>
  <div class="tags">
    <el-tag
      class="ml-2"
      type="info"
      v-for="(v, i) in tagsList"
      @click="go(v.path)"
      :key="i"
      closable
      @close="delTag(i)"
      >{{ v.title }}</el-tag
    >
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { watch, computed } from 'vue'
const route = useRoute()
const store = useStore()
const router = useRouter()

watch(
  () => route.matched,
  (newVal, oldVal) => {
    newVal.forEach((v, i) => {
      if (i === 1) {
        const obj = {
          title: v.meta.title,
          path: v.path
        }
        store.commit('user/setTagsList', obj)
      }
    })
  }
)

const tagsList = computed(() => {
  return store.getters.tags
})

function go(path) {
  // console.log(path)
  router.push(path)
}

function delTag(i) {
  store.commit('user/delTag', i)
}
</script>

<style lang="scss" scoped>
.tags {
  height: 40px;
  border-bottom: 1px solid #e4e7ed;
  display: flex;
  align-items: center;
  .el-tag {
    margin-left: 10px;
  }
}
</style>
