<template>
 <div>
  <common-header></common-header>
  <div class="personmnav">
    <div class="nav-wrapper">
      <div class="pro-content">
        <ul class="ul-wrap">
          <router-link to="/person/account"><li @click="handleClick('account')" :class="{active: type=='account'}">账户名称</li></router-link>
          <router-link to="/person/info"><li @click="handleClick('info')" :class="{active: type=='info'}">个人信息</li></router-link>
          <router-link to="/person/order"><li @click="handleClick('order')" :class="{active: type=='order'}">订单详情</li></router-link>
          <router-link to="/person/modify"><li @click="handleClick('modify')" :class="{active: type=='modify'}">修改资料</li></router-link>
        </ul>
      </div>
    </div>
  </div>
  <div>
  </div>
  <keep-alive>
  <router-view/>
  </keep-alive>
 </div>
</template>

<script>
import CommonHeader from '../common/header.vue'
export default {
  name: 'Person',
  components: {
    CommonHeader
  },
  data () {
    return {
      activeName: '个人中心',
      type: ''
    }
  },
  created () {
    // 获取首页数据 分发给子组件
  },
  mounted () {
    this.processTabCurrent()
  },
  methods: {
    handleClick (type) {
      this.type = type
    },
    processTabCurrent () {
      var param = this.$route.path
      var parr = param.split('/')
      this.handleClick(parr[2])
    }
  },
  deactivated () {
    this.type = ''
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
.active {
  background: #00E5EE;
  color: white;
}

</style>
