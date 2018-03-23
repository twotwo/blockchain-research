<template>
 <div>
  <common-header></common-header>
  <page-detail></page-detail>
 </div>
</template>

<script>
import CommonHeader from '../common/header.vue'
import PageDetail from './PageDetail.vue'
export default {
  name: 'Home',
  components: {
    CommonHeader,
    PageDetail
  },
  data () {
    return {
      activeName: '首页'
    }
  }
}
</script>
<style scoped>
</style>
