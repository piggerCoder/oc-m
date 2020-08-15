<template>
  <div class="home">
    <van-form>
      <van-field
              v-model="username"
              name="用户名"
              label="用户名"
              placeholder="用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
              v-model="password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
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
