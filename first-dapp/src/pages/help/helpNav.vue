<template>
  <div class="helpnav">
    <div class="nav-wrapper">
      <div class="help-content">
        <ul class="ul-wrap">
          <li>帮助中心</li>
          <li>账号帮助</li>
          <li>交易帮助</li>
          <li>安全保障</li>
          <li>常见问题</li>
          <li>网站公告</li>
          <li>关于我们</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelpNav',
  components: {
  },
  data () {
    return {
      activeName: '项目列表'
    }
  }
}
</script>
<style scoped>
.helpnav {
  padding-top: 120px;
  height: 100%;
}
.nav-wrapper {
  width: 300px;
  position: fixed;
  height: 100%;
  left: 50px;
  top: 120px;
  border: #eee 1px solid;
}
.help-content {

}
.ul-wrap {
}
.ul-wrap li {
  width: 300px;
  height: 70px;
  text-align: center;
  color: #adadad;
  line-height: 70px;
  box-sizing: border-box;
  border-bottom: #eee 1px solid;

}
</style>
