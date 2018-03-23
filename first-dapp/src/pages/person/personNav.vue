<template>
  <div class="personmnav">
    <div class="nav-wrapper">
      <div class="pro-content">
        <ul class="ul-wrap">
          <router-link to="/person"><li>账户名称</li></router-link>
          <router-link to="/person/info"><li>个人信息</li></router-link>
          <router-link to="/order"><li>订单详情</li></router-link>
          <router-link to="/person/info"><li>修改资料</li></router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PersonNav',
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
.personmnav {
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
.pro-content {

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
