<template>
 <div>
  <common-header></common-header>
   <div class="counter">
    <div class="nav-wrapper">
      <div class="help-content">
        <ul class="ul-wrap">
          <router-link to="/help/center"><li @click="handleClick('center')" :class="{active: type=='center'}">帮助中心</li></router-link>
          <router-link to="/help/account"><li @click="handleClick('account')" :class="{active: type=='account'}">账号帮助</li></router-link>
          <router-link to="/help/transaction"><li @click="handleClick('transaction')" :class="{active: type=='transaction'}">交易帮助</li></router-link>
          <router-link to="/help/safe"><li @click="handleClick('safe')" :class="{active: type=='safe'}">安全保障</li></router-link>
          <router-link to="/help/common"><li @click="handleClick('common')" :class="{active: type=='common'}">常见问题</li></router-link>
          <router-link to="/help/notice"><li  @click="handleClick('notice')" :class="{active: type=='notice'}">网站公告</li></router-link>
          <router-link to="/help/about"><li  @click="handleClick('about')" :class="{active: type=='about'}">关于我们</li></router-link>
        </ul>
      </div>
    </div>
  </div>
  <keep-alive>
   <router-view/>
  </keep-alive>
 </div>
</template>

<script>
import CommonHeader from '../common/header.vue'

export default {
  name: 'Help',
  components: {
    CommonHeader
  },
  data () {
    return {
      type: ''
    }
  },
  mounted () {
    this.processTabCurrent()
  },
  methods: {
    handleClick (type) {
      console.log('type' + type)
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
.counter {
  padding-top: 120px;
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
.active {
  background: #00E5EE;
  color: white;
}
</style>
