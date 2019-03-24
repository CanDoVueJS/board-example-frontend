import Vue from 'vue'
import Router from 'vue-router'
import Signup from '@/pages/Signup'
import Signin from '@/pages/Signin'
import CommunityList from '@/pages/CommunityList'
import BoardCreate from '@/pages/BoardCreate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CommunityList',
      component: CommunityList
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
