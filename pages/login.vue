<template>
  <div class="page-login">
    <div class="login-header">
      <a href="/"
        ><img
          src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
          alt=""
          class="logo"
      /></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        />
      </div>
      <div class="form">
        <h4 v-if="error" class="tips"><i />{{ error }}</h4>
        <p><span>账号登录</span></p>
        <el-input v-model="username" prefix-icon="profile" />
        <el-input v-model="password" prefix-icon="password" type="password" />
        <div class="foot">
          <el-checkbox v-model="checked">7天内自动登录</el-checkbox>
          <b>忘记密码？</b>
        </div>
        <el-button class="btn-login" type="success" size="mini" @click="login"
          >登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
export default {
  data() {
    return {
      checked: "",
      username: "",
      password: "",
      error: "",
    };
  },
  layout: "blank",
  methods: {
    login() {
      let self = this;
      this.$axios
        .post("/users/signin", {
          username: encodeURIComponent(self.username),
          password: CryptoJS.MD5(self.password).toString(),
        })
        .then(({ status, data }) => {
          if (status === 200) {
            if (data && data.code === 0) {
              location.href = "/";
            } else {
              self.error = data.msg;
            }
          } else {
            self.error = "服务器错误";
          }
        });
    },
  },
};
</script>

<style lang="scss" >
@import "@/assets/css/login/index.scss";
.logo {
  width: 180px;
  height: 100px;
}
</style>
