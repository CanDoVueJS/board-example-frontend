import Vue from 'vue'
import Router from 'vue-router'
import AppHeader from '@/components/AppHeader'
import Signup from '@/pages/Signup'
import Signin from '@/pages/Signin'
import BoardListPage from '@/pages/BoardListPage'
import PostCreatePage from '@/pages/PostCreatePage'
import PostEditPage from '@/pages/PostEditPage'
import BoardViewPage from '@/pages/BoardViewPage'
import store from '@/store'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      },
      beforeEnter (to, from, next) {
        const { isAuthorized } = store.getters
        if (!isAuthorized) {
          alert('로그인이 필요합니다!')
          next(from)
        }
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
      path: '/post/:postId/edit',
      name: 'PostEditPage',
      components: {
        header: AppHeader,
        default: PostEditPage
      },
      props: {
        default: true
      },
      beforeEnter (to, from, next) {
        const { isAuthorized } = store.getters
        if (!isAuthorized) {
          alert('로그인이 필요합니다!')
          next(from)
        }
        store.dispatch('fetchPost', to.params.postId)
          .then(() => {
            const post = store.state.post
            const isAuthor = post.user.id === store.state.me.id
            if (isAuthor) {
              next()
            } else {
              alert('게시물의 작성자만 게시물을 수정할 수 있습니다.')
            }
          }).catch(err => {
            console.error(err)
            // alert(err.response.data.msg)
            next(from)
          })
      }
    }
  ]
})
