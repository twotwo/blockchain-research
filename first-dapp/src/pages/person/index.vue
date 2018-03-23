<template>
 <div>
  <common-header></common-header>
  <div class="personmnav">
    <div class="nav-wrapper">
      <div class="pro-content">
        <ul class="ul-wrap">
          <router-link to="/person/account"><li>账户名称</li></router-link>
          <router-link to="/person/info"><li>个人信息</li></router-link>
          <router-link to="/person/order"><li>订单详情</li></router-link>
          <router-link to="/person/info"><li>修改资料</li></router-link>
        </ul>
      </div>
    </div>
  </div>
  <div>
  </div>
  <router-view></router-view>
 </div>
</template>

<script>
import CommonHeader from '../common/header.vue'
import PersonNav from './personNav.vue'
export default {
  name: 'Person',
  components: {
    CommonHeader,
    PersonNav
  },
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
