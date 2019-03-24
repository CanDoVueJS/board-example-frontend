<template>
  <div>
    <app-header/>
    <board-list/>
  </div>
</template>
<script>
import BoardList from '@/components/BoardList'

export default {
  name: 'CommunityList',
  components: { BoardList }
}
</script>
