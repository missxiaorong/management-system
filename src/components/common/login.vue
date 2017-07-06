<template>
  <div class="login-body">
    <div class="loginWarp">
      <div class="login-title">
        <img src="../../assets/images/logo.png">
      </div>
      <div class="login-form">
        <el-form ref="form" :model="form" :rules="rules" label-width="0">
          <el-form-item prop="username" class="login-item">
            <el-input placeholder="请输入账户名：" class="form-input" :autofocus="true" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item prop="password" class="login-item">
            <el-input type="password" placeholder="请输入账户密码：" class="form-input" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item class="login-item">
            <el-button size="large" class="form-submit" v-loading="loading" @click.native.prevent="handleSubmit('form')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      form: {
        username: '',
        password: '',
        verifyCode: ''
      },
      requireVerify: false,
      form: {
        username: null,
        password: null
      },
      rules: {
        username: [{ required: true, message: '请输入账户名！', trigger: 'blur' }],
        password: [{ required: true, message: '请输入账户密码！', trigger: 'blur' }]
      },
      // //请求时的loading效果
      load_data: false
    }
  },
  methods: {

    //提交
    handleSubmit(form) {
      if (this.loading) return
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = !this.loading
          let username = this.form.username
          let password = this.form.password
          if (username == 'admin' && password == 'admin') {
            this.$message({
              message: '欢迎成功登录奇思广议后台管理系统!'
            });
            this.$router.push('/')
          }
          else {
            this.$notify.info({
              title: '温馨提示',
              message: '账号和密码都为：admin'
            })
            this.loading = !this.loading
          }
        }
      })
    }


  }
}


</script>
<style>
.login-body {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/images/bg2.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.loginWarp {
  width: 300px;
  padding: 25px 15px;
  margin: 100px auto;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.15);
}

.login-title {
  margin-bottom: 25px;
  text-align: center;
}

.login-title img {
  width: 300px;
  height: 150px;
}

.el-input__inner {
  margin: 0 !important;
}

.form-input input {
  margin-bottom: 15px;
  font-size: 12px;
  height: 40px;
  border: 1px solid #eaeaec;
  background: #eaeaec;
  border-radius: 5px;
  color: #555;
}

.form-submit {
  width: 100%;
  color: #fff;
  border-color: #6bc5a4;
  background: #6bc5a4;
}
</style>
