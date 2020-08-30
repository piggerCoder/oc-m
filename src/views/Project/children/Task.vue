<template>
  <div class="task">
    <router-view/>
    <div class="task-top">
      <van-nav-bar title="我的任务">
        <template #right>
          <van-icon name="search" size="22" color="#565656"/>
        </template>
      </van-nav-bar>
    </div>
    <div class="task-content">
      <van-cell title="单元格" center label="xxx" size="large" to="/project/:id">
        <template #right-icon>
          <van-tag round type="danger" size="large">进行中</van-tag>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Task"
  }
</script>

<style scoped>

</style>