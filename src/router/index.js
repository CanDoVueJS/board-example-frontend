import Vue from 'vue'
import Router from 'vue-router'
import Signup from '../pages/Signup/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
