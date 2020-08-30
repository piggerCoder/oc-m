<template>
  <div class="project">
    <router-view/>
    <div class="project-plusIcon">
      <img src="../../assets/plus.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Index"
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