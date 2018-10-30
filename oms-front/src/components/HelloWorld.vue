<template>
  <div class="container content-container">
    <div class="header-box">
    头部
    </div>
    <div class="sideBar">
      <ul>
        <li>
          <a>应用管理</a>
          <ul>
            <li><a><font-awesome-icon icon="coffee" />基础信息管理</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="content-body">
      123
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goLogin: function () {
      this.$router.push({path: '/'})
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
