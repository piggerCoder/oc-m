<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      const res = await this.$_api.getUserInfo();
      if (res.code == 500210) {
        this.$router.replace("/login");
      } else {
        window.sessionStorage.setItem("userInfo", JSON.stringify(res.data));
      }
    },
  },
};
</script>

<style lang="less">
html,
body {
  padding: 0;
  margin: 0;
  background-color: #f8f8f8;
}
</style>
