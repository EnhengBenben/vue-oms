<template>
  <div class="ibox-content">
    <form class="m-t" role="form">
      <div class="form-group" style="margin-bottom: 10px">
        <el-input v-model="account.name" placeholder="请输入用户名" aria-required="true"></el-input>
      </div>
      <div class="form-group">
        <el-input type="password" v-model="account.pwd" placeholder="请输入密码" aria-required="true"></el-input>
      </div>
      <p v-if="errorMsg" class="help-block" style="color: #FF3f6f">{{errorMsg}}</p>
      <el-button style="width: 100%;margin-top: 10px" type="primary" @click="login()">登录</el-button>
    </form>
    <p class="m-t text-center">
      <small>OMS后台管理系统 &copy; {{year}}</small>
    </p>
  </div>
</template>

<script>
  import {AuthService} from '../apis/AuthServices'

  export default {
    name: 'Login',
    data () {
      return {
        account: {
          name: '',
          pwd: ''
        },
        errorMsg: '',
        year: '2018'
      }
    },
    methods: {
      login: function () {
        if(this.account.name && this.account.pwd) {
          var that = this
          AuthService
            .login(this.account)
            .then(function (res) {
              window.localStorage.jtw = res.data.token
              window.localStorage.user = res.data.user
            }, function (conf) {
              that.errorMsg = conf.error
            })
        }else {
          this.errorMsg = '请输入用户名和密码'
        }
        // .login({username: 'omstest', pwd: 'celloud'})
      }
    }
  }
</script>

<style lang="scss">
  body {
    background: #2f4050;
  }
  .ibox-content{
    position:absolute;
    left:50%;
    top: 50%;
    width: 500px;
    height: 210px;
    margin-left: -265px;
    margin-top: -125px;
    background-color: #FFF;
    padding: 20px 15px;
    border-radius: 5px;
  }
  .help-block{
    color: rgb(255, 63, 111);
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left;
    font-size: 12px;
  }
</style>
