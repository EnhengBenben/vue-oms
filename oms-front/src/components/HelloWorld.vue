<template>
  <div class="container content-container">
    <div class="header-box">
    头部
    </div>
    <div class="sideBar">
      <ul class="metismenu">
        <li class="menu1-list" :class="{'active': status.application}">
          <a class="father-link" @click="changeState('application')">应用管理</a>
          <ul>
            <li>
              <router-link :to="{name: 'Application'}">
                <font-awesome-icon icon="coffee" /> 基础信息管理
              </router-link>
              <!--<a><font-awesome-icon icon="coffee" />基础信息管理</a>-->
            </li>
          </ul>
        </li>
        <li class="menu1-list" :class="{'active': status.toggle}">
          <a class="father-link" @click="changeState('toggle')">报告查询</a>
          <ul>
            <li>
              <router-link :to="{name: 'report'}">
                <font-awesome-icon icon="coffee" /> 报告管理
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="content-body">
      <router-view></router-view>
    </div>
    <!--<div class="content-footer">-->
      <!--OMS后台管理系统 &copy; {{2018}}-->
    <!--</div>-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      status: {
        toggle: false,
        application: false
      }
    }
  },
  methods: {
    goLogin: function () {
      this.$router.push({path: '/'})
    },
    changeState: function (state) {
      for (let i in this.status) {
        if (i !== state) {
          this.status[i] = false
        }
      }
      this.status[state] = !this.status[state]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/style";
  h1, h2 {
  font-weight: normal;
}
</style>
