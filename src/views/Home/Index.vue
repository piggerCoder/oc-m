<template>
  <div class="home">hello world</div>
</template>

<script>
export default {
  name: "Home",
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
}
</style>
