<template>
 <div class="nav">
  <router-link to="/"><img :src="logosrc" class="logo" /></router-link>
  <ul class="counter">
   <li v-for= "(item, index) in menu"
    :key=index
    @click="handClick(index)"
    :class="{ active: activeName == item }">
    {{ item }}
   </li>
  </ul>
 </div>
</template>

<script>
// import { mapState, mapMutations } from 'vuex'
export default {
  name: 'commonheader',
  data () {
    return {
      logosrc: 'https://avatars3.githubusercontent.com/u/4859506?s=460&v=4',
      menu: ['首页', '项目列表', '个人中心', '帮助中心'],
      routeList: ['/', '/list', '/person', '/help'],
      activeName: '首页'
    }
  },
  mounted () { // 先通过路由判断当前的 tab 在路由不满足的情况下通过state来判断 state 默认首页 只有点击切换的时候改变 state中的值
    let ins = this.routeList.indexOf(this.$route.path)
    if (ins !== -1) {
      this.activeName = this.menu[ins]
    } else {
      let fpa = this.$route.path.split('/')[1]
      let ns = this.routeList.indexOf('/' + fpa)
      if (ns !== -1) {
        this.activeName = this.menu[ns]
      } else {
        let i = this.routeList.indexOf(this.$store.state.activeIndex)
        if (i !== -1) {
          this.activeName = this.menu[i]
        }
      }
    }
  },
  methods: {
    handClick (index) {
      this.$store.commit('set_active_index', this.routeList[index])
      console.log(this.$store.state.activeIndex)
      switch (index) {
        case 0 :
          this.$router.push('/')
          break
        case 1 :
          this.$router.push('/list')
          break
        case 2 :
          this.$router.push('/person')
          break
        case 3 :
          this.$router.push('/help')
          break
        default: this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
 .nav {
  position: fixed;
  width: 100%;
  height: 55px;
  border-bottom: #ccc 1px solid;
  top:0;
  z-index: 5;
  background: #fff;
}
 .logo {
  position: absolute;
  width: 100px;
  height: 45px;
  left: 60px;
  top:5px;
 }
 .counter {
  width: 60%;
  margin: 0 auto;
  overflow: hidden;
  line-height: 52px;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
 }
 li {
  color: #adadad;
  font-size: 17px;
  box-sizing: border-box;
 }
 .active {
  border-bottom: #4f4f4f 3px solid;
  color: #4f4f4f;
  box-sizing: border-box;
 }
</style>
