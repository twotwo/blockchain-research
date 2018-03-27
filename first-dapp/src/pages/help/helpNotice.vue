<template>
  <div>
   <div class="main">
    <div class="content">
     helpNotice
    </div>
   </div>
  </div>
</template>
<script>

export default {
  name: 'HelpNotice',
  data () {
    return {
      activeName: '个人中心'
    }
  },
  created () {
    // 获取首页数据 分发给子组件
  }
}
</script>
<style scoped>
.main {
  height: 100%;
  text-align: center;
}
.content {
}
</style>
