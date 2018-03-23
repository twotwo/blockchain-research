<template>
 <div>
  <common-header></common-header>
  <help-nav></help-nav>
 </div>
</template>

<script>
import CommonHeader from '../common/header.vue'
import HelpNav from './helpNav.vue'

export default {
  name: 'Help',
  components: {
    CommonHeader,
    HelpNav
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
