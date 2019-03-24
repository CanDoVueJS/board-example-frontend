<template>
  <div class="app-header">
    <h1>Community</h1>
    <div v-if="isAuthorized">
      <strong>
        <button @click="toggle">{{ me.name }}님 환영합니다.
          <i v-if="!isActive" class="fas fa-sort-down"></i>
          <i v-else class="fas fa-sort-up"></i>
        </button>
      </strong>
      <ul v-if="isActive">
        <li><button @click="signout">로그아웃</button></li>
      </ul>
    </div>
    <div v-else>
      <router-link :to="{ name: 'Signin' }">로그인</router-link>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'AppHeader',
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    ...mapState([ 'me' ]),
    ...mapGetters([ 'isAuthorized' ])
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
    },
    ...mapActions([ 'signout' ])
  }
}
</script>

<style>
  .app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #ededed;
    background-color: #fff;
  }
  .app-header h1 {
    position: absolute;
    left: 10px;
    top: 12px;
    font-size: 26px;
  }
  .app-header > div {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .app-header > div > strong > button {
    font-size: 14px;
  }
  .app-header > div > strong > button:focus {
    outline: none;
  }
  .app-header > div > strong > button > i {
    padding-left: 8px;
  }
  .app-header > div > strong > button > .fa-sort-up {
    margin-bottom: -1px;
    vertical-align: bottom;
  }
  .app-header > div > strong > button > .fa-sort-down {
    margin-top: -1px;
    vertical-align: top;
  }
  .app-header > div > ul {
    position: absolute;
    top: 44px;
    left: 0;
    width: 100%;
    box-shadow: 0 4px 10px -4px rgba(0, 0, 0, 0.2);
  }
  .app-header > div > ul > li > button {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    text-align: left;
  }
  .app-header > div > ul > li > button:focus {
    outline: none;
  }
</style>
