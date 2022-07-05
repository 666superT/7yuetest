<template>
  <ul class="tags">
    <li>
      首页
      <span class="close">
        <el-icon><Close /></el-icon>
      </span>
    </li>
    <li class="active">首页</li>
    <li>首页</li>
    <li>首页</li>
    <li>首页</li>
  </ul>
</template>

<script setup>
import { Close } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.tags {
  height: 40px;
  border-bottom: 1px solid #e4e7ed;
  display: flex;
  li {
    padding: 0 20px;
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    font-size: 14px;
    font-weight: 500;
    color: #303133;
    border-right: 1px solid #e4e7ed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &:nth-of-type(2n + 1) {
      border-left: none;
    }
    &:hover {
      .close {
        display: inline-block;
        text-align: center;
      }
      color: #409eff;
    }
    .close {
      display: none;
      text-align: center;
      width: 18px;
      height: 18px;
      line-height: 18px;
      &:hover {
        display: inline-block;
        background: #c0c4cc;
        border-radius: 50px;
        color: #fff;
      }
    }
  }
  .active {
    background: #fff;
    border-left: none;
    color: #409eff;
    position: relative;
    height: 41px;
  }
}
</style>
