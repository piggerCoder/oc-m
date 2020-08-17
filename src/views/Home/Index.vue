<template>
  <div class="home">
    <van-tabbar v-model="active" active-color="#26978F" inactive-color="#565656" class="tab">
      <van-tabbar-item name="notice" icon="comment-o" replace to="/notice">通知</van-tabbar-item>
      <van-tabbar-item name="project" icon="points" replace to="/project">项目</van-tabbar-item>
      <van-tabbar-item name="file" icon="description" replace to="/file">文件</van-tabbar-item>
      <van-tabbar-item name="me" icon="contact" replace to="/me">我</van-tabbar-item>
    </van-tabbar>
    <router-view id="router-view" />
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        active: 'project'
      }
    },
    mounted() {
      this.getLog();
    },
    methods: {
      async getLog() {
        //调接口简单示例
        const res = await this.$_api.getAllLog();
        console.log(res);
      }
    }
  };
</script>
<style lang="less" scoped>
  .home {
    width: 750px;
    background-color: #F8F8F8;
  }
  #router-view {
    flex: 1;
  }
</style>
