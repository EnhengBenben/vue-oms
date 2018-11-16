<template>
  <div class="container content-container">
    <div class="header-box">
    头部
    </div>
    <el-row style="width: 210px;position: absolute">
      <el-col :span="24">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          router
          unique-opened
          background-color="#2f4050"
          text-color="#fff"
          active-text-color="#1dd2af">
          <el-submenu index="application">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>应用管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/app/application">基础信息管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="app">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>报告查询</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/app/report">报告管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">测试账号</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <!--<div class="sideBar">-->
      <!--<ul class="metismenu">-->
        <!--<li class="menu1-list" :class="{'active': status.application}">-->
          <!--<a class="father-link" @click="changeState('application')">应用管理</a>-->
          <!--<ul>-->
            <!--<li>-->
              <!--<router-link :to="{name: 'Application'}">-->
                <!--<font-awesome-icon icon="coffee" /> 基础信息管理-->
              <!--</router-link>-->
              <!--&lt;!&ndash;<a><font-awesome-icon icon="coffee" />基础信息管理</a>&ndash;&gt;-->
            <!--</li>-->
          <!--</ul>-->
        <!--</li>-->
        <!--<li class="menu1-list" :class="{'active': status.toggle}">-->
          <!--<a class="father-link" @click="changeState('toggle')">报告查询</a>-->
          <!--<ul>-->
            <!--<li>-->
              <!--<router-link :to="{name: 'report'}">-->
                <!--<font-awesome-icon icon="coffee" /> 报告管理-->
              <!--</router-link>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
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
  h1, h2 {
  font-weight: normal;
}
</style>
