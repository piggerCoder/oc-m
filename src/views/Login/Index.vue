<template>
  <div class="login">
    <div class="login-title">
      <img class="login-title-img" src="../../assets/logo.png" />
      <div class="login-title-text">Fx Cooper</div>
    </div>
    <input v-model="mailbox" placeholder="邮箱" class="input-mailbox" />
    <input type="password" v-model="password" placeholder="密码" class="input-psw" />
    <div @click="login" class="login">登录</div>
    <router-link class="link" to="/register">没有账号，点击注册</router-link>
    <router-link class="link" to="/reset">忘记密码，点击重置</router-link>
  </div>
</template>

<script>
import index from "./js/Index";
export default index;
</script>

<style scoped lang="less">
@import url("./style/Index.less");
</style>
