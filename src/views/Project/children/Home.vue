<template>
  <div class="project">
    <div class="project-top">
    <van-nav-bar
    title="项目"
    />
    </div>
    <div class="project-content">
    <van-cell-group>
    <van-cell title="工作" size="large"/>
    <van-cell to="/task">
    <template #title>
    <van-icon name="notes-o" class="project-content-icon" size="22"/>
    <span class="project-content-title">我的任务</span>
    </template>
    </van-cell>
    <van-cell title="项目" size="large"/>
    <van-cell>
    <template #title>
    <van-icon name="orders-o" class="project-content-icon" size="22"/>
    <span class="project-content-title">xxx</span>
    </template>
    </van-cell>
    </van-cell-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped lang="less">
  .project {
    &-top {
    }
    &-content {
      &-title {
        margin-right: 4px;
        vertical-align: middle;
        padding-left: 36px;
      }
      &-icon {
        vertical-align: middle;
      }
    }
    &-plusIcon {
      position: fixed;
      bottom: 70pt;
      right: 19pt;
    }
  }
</style>