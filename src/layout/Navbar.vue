<template>
  <div class="navbar">
    <h3>VueAdmin后台管理系统</h3>
    <div class="user">
      <el-avatar :size="40" :src="userInfo.avatar" style="margin-right: 10px" />
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          {{ userInfo.username
          }}<el-icon class="el-icon--right"><ArrowDown /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="goHome">个人中心</el-dropdown-item>
            <el-dropdown-item command="edit">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { ArrowDown } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const userInfo = computed(() => {
  return store.getters.userInfo
})

function handleCommand(val) {
  if (val === 'goHome') router.push('/')
  if (val === 'edit') {
    store.dispatch('user/handleEdit')
    router.push('/login')
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 55px;
  background: #17b3a3;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 50px;
  box-sizing: border-box;
  justify-content: space-around;
  h3{
    margin-right: 200px;
  }
  .user {
    position: absolute;
    right: 50px;
    display: flex;
    align-items: center;
  }
}
</style>
