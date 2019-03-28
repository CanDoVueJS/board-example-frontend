import Vue from 'vue'
import Router from 'vue-router'
import AppHeader from '@/components/AppHeader'
import Signup from '@/pages/Signup'
import Signin from '@/pages/Signin'
import BoardListPage from '@/pages/BoardListPage'
import PostCreatePage from '@/pages/PostCreatePage'
import PostEditPage from '@/pages/PostEditPage'
import BoardViewPage from '@/pages/BoardViewPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BoardListPage',
      components: {
        header: AppHeader,
        default: BoardListPage
      }
    },
    {
      path: '/post/:postId',
      name: 'BoardViewPage',
      components: {
        header: AppHeader,
        default: BoardViewPage
      },
      props: {
        default: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      components: {
        header: AppHeader,
        default: Signup
      }
    },
    {
      path: '/signin',
      name: 'Signin',
      components: {
        header: AppHeader,
        default: Signin
      }
    },
    {
      path: '/post/create',
      name: 'PostCreate',
      components: {
        header: AppHeader,
        default: PostCreatePage
      }
    },
    {
      path: '/post/edit/:postId',
      name: 'PostEditPage',
      components: {
        header: AppHeader,
        default: PostEditPage
      },
      props: {
        default: true
      }
    }
  ]
})
