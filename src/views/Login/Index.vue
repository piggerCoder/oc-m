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
export default {
  name: "",
  data() {
    return {
      mailbox: "",
      password: "",
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.mailbox = getLocal("mailbox") || "";
      this.password = getLocal("password") || "";
    },
    async login() {
      let mailbox = this.mailbox,
        password = this.password;
      if (!mailbox) {
        this.Toast.fail("邮箱不可为空");
        return;
      }
      if (!password) {
        this.Toast.fail("密码不可为空");
        return;
      }
      let data = {
        mailbox: this.mailbox,
        password: this.password,
      };
      const res = await this.$_api.login(data);
      if (res.code == 200) {
        this.$router.push("/");
      } else {
        this.Toast.fail(res.data);
      }
    },
  },
};
</script>

<style scoped lang="less">
.login {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &-title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 140px;
    margin-bottom: 50px;
    &-text {
      width: 300px;
      height: 62px;
      font-size: 60px;
      font-family: Microsoft YaHei UI Regular,
        Microsoft YaHei UI Regular-Regular;
      font-weight: bold;
      text-align: left;
      color: #ffffff;
      margin-left: 62px;
    }
  }
  input {
    width: 520px;
    height: 68px;
    background: #ffffff;
    border-radius: 10px;
    margin-bottom: 40px;
    font-size: 28px;
    font-family: Microsoft YaHei UI Regular, Microsoft YaHei UI Regular-Regular;
    font-weight: 400;
    text-align: left;
    text-indent: 30px;
    margin-left: 115px;
    border: none;
    &::placeholder {
      color: #d5d5d5;
    }
  }
  .login {
    width: 520px;
    height: 80px;
    background: #7cdcb5;
    border-radius: 30px;
    font-size: 28px;
    font-family: Microsoft YaHei UI Regular, Microsoft YaHei UI Regular-Regular;
    font-weight: 400;
    text-align: center;
    color: #ffffff;
    line-height: 80px;
    margin: 0 auto;
  }
  .link {
    width: 217px;
    height: 25px;
    font-size: 24px;
    font-family: Microsoft YaHei UI Regular, Microsoft YaHei UI Regular-Regular;
    font-weight: 400;
    text-decoration: underline;
    text-align: left;
    color: #ffffff;
    margin: 40px auto 0 auto;
  }
}
</style>
