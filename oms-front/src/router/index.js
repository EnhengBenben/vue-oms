import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: function (resolve) {
        require(['../components/HelloWorld.vue'], resolve)
      }
    },
    {
      path: '/',
      name: 'Login',
      component: function (resolve) {
        require(['../components/login.vue'], resolve)
      }
    }
  ]
})
