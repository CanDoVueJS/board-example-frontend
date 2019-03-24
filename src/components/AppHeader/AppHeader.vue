<template>
  <div class="app-header">
    <h1>Community</h1>
    <div>
      <strong>
        <button @click="toggle">김영훈님 환영합니다.
          <i v-if="!isActive" class="fas fa-sort-down"></i>
          <i v-else class="fas fa-sort-up"></i>
        </button>
      </strong>
      <ul v-if="isActive">
        <li><button>로그아웃</button></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
    }
  }
}
</script>
