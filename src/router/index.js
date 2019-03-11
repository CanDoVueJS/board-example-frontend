import Vue from 'vue'
import Router from 'vue-router'
import Signup from '@/pages/Signup'
import Signin from '@/pages/Signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})
