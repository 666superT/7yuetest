<template>
  <el-row>
    <el-col :span="3">
      <sidebar></sidebar>
    </el-col>
    <el-col :span="21">
      <navbar></navbar>
      <app-main></app-main>
    </el-col>
  </el-row>
</template>

<script setup>
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import AppMain from './AppMain'
</script>

<style lang="scss" scoped>
.el-row{
  height: 100%;
}
</style>
