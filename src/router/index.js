import Vue from 'vue'
import Router from 'vue-router'
import Signup from '@/pages/Signup'
import Signin from '@/pages/Signin'
import BoardList from '@/pages/BoardList'
import BoardCreate from '@/pages/BoardCreate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Board',
      component: BoardList
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/board/create',
      name: 'BoardCreate',
      component: BoardCreate
    }
  ]
})
