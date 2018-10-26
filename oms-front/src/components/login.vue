<template>
  <div class="loginColumns animated fadeInDown" style="height: 100%;width: 100%">
    <div class="col-md-8 col-md-offset-2">
      <div class="ibox-content">
        <form class="m-t" role="form" :submit="login()">
          <div class="form-group">
            <input type="text" v-model="account.name" class="form-control" placeholder="请输入用户名" required="">
          </div>
          <div class="form-group">
            <input type="password" v-model="account.pwd" class="form-control" placeholder="请输入密码" required="">
          </div>
          <p v-if="error" class="help-block" style="color: #FF3f6f">{{errorMeg}}</p>
          <button type="submit" class="btn btn-primary block full-width m-b">登录</button>
        </form>
        <p class="m-t text-center">
          <small>oms后台管理系统 &copy; {{year}} 上海华点云生物科技有限公司</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      account: {
        name: '',
        pwd: '',
      },
      year: '2018',
      errorMsg: '123',
      error: true
    }
  },
  methods: {
    login: function () {
      console.log(this.account);
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../styles/style";
</style>
