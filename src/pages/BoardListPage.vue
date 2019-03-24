<template>
  <div>
    <app-header/>
    <board-list/>
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader/AppHeader'
import BoardList from '@/components/BoardList/BoardList'

export default {
  name: 'BoardListPage',
  components: {
    AppHeader,
    BoardList
  }
}
</script>
