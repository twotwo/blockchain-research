<template>
 <div>
  <common-header></common-header>
  <pro-list></pro-list>
 </div>
</template>

<script>
import CommonHeader from '../common/header.vue'
import ProList from './proList.vue'

export default {
  name: 'List',
  components: {
    CommonHeader,
    ProList
  },
  data () {
    return {
      activeName: '项目列表'
    }
  }
}
</script>
<style scoped>

</style>
