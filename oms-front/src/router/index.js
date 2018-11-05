import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      // component: () => import('@/views/login'),
      component: function (resolve) {
        require(['../components/HelloWorld.vue'], resolve)
      },
      children: [{
        path: 'application',
        name: 'Application',
        component: function (resolve) {
          require(['../components/application.vue'], resolve)
        }
      }, {
        path: 'report',
        name: 'report',
        component: function (resolve) {
          require(['../components/report.vue'], resolve)
        }
      }]
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
