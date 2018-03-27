<template>
 <div id="pagecounter" class="pagecounter">
    <page-content :currentPage="currentPage">
        <desctiption-page class="animate"></desctiption-page>
    </page-content>
    <page-content :currentPage="currentPage">
       <desctiption-page class="animate"></desctiption-page>
    </page-content>
    <page-content :currentPage="currentPage">
      <desctiption-page class="animate"></desctiption-page>
    </page-content>
    <page-content :currentPage="currentPage">
       <desctiption-page class="animate"></desctiption-page>
    </page-content>
    <page-content :currentPage="currentPage">
       <desctiption-page class="animate"></desctiption-page>
    </page-content>
    <page-controller :pageNum="pageNum" :currentPage="currentPage" @changePage="changePage" :option="controllerOption"></page-controller>
  </div>
</template>
<script>
import PageController from '../common/fullpage/PageController.vue'
import PageContent from '../common/fullpage/PageContent.vue'
import DesctiptionPage from './descriptionPage.vue'

// 页面进出动画
function afterEnterAnimate ($child) {
  $child.$el.querySelector('.animate').classList.remove('move-left', 'move-right')
}
function beforeLeaveAnimate ($child) {
  let moveType = Math.random() > 0.5 ? 'move-left' : 'move-right'
  $child.$el.querySelector('.animate').classList.add(moveType)
}

export default {
  name: 'pagedetail',
  components: {
    PageController,
    PageContent,
    DesctiptionPage
  },
  data () {
    return {
      currentPage: 1,
      options: [{
        // the color of background
        background: 'rgba(229, 199, 46, 1)',
        // the color of text
        color: '#fff',
        // is content center
        isCenter: true,
        afterEnter: afterEnterAnimate,
        beforeLeave: beforeLeaveAnimate
      }, {
        background: 'rgba(79, 204, 76, 1)',
        color: '#fff',
        isCenter: true,
        afterEnter: afterEnterAnimate,
        beforeLeave: beforeLeaveAnimate
      }, {
        background: 'rgba(233, 84, 84, 1)',
        color: '#fff',
        isCenter: true,
        afterEnter: afterEnterAnimate,
        beforeLeave: beforeLeaveAnimate
      }, {
        background: 'rgba(46, 153, 229, 1)',
        color: '#fff',
        isCenter: true,
        afterEnter: afterEnterAnimate,
        beforeLeave: beforeLeaveAnimate
      }, {
        // the color of background
        background: 'rgba(229, 199, 46, 1)',
        // the color of text
        color: '#fff',
        // is content center
        isCenter: true,
        afterEnter: afterEnterAnimate,
        beforeLeave: beforeLeaveAnimate
      }],
      controllerOption: {
        arrowsType: false,
        navbar: true,
        highlight: true,
        loop: false
      }
    }
  },
  watch: {
    currentPage () {
      console.log('---currentPage---' + this.currentPage)
      // 首页  每一屏加载数据的时候可以在这了加载数据 根据currentPage 去加载对应页面的数据
      // 注意  第一次进来的时候currentPage 是1   不触发此方法 需要在父组件中获取数据 传递过来
      // 看需求是一次加载 所有page的数据  还是一次请求一屏的数据 来决定要不要调用此方法
    }
  },
  computed: {
    // 总page数
    pageNum () {
      return this.options.length
    }
  },
  methods: {
    changePage (index) {
      // beforeLeave Hook
      let beforeIndex = this.currentPage - 1
      let leaveFunction = this.options[beforeIndex].beforeLeave
      typeof leaveFunction === 'function' && leaveFunction.call(this, this.$children[beforeIndex])
      // change page
      this.currentPage = index
      // afterEnter Hook
      let nextIndex = index - 1
      let enterFunction = this.options[nextIndex].afterEnter
      this.$nextTick(function () {
        typeof enterFunction === 'function' && enterFunction.call(this, this.$children[nextIndex])
      })
    }
  },
  mounted () {
    console.log('pagedetail--mounted')
    this.$children.forEach((child, index) => {
      // 动态设置各个page内的options
      if (child.option === null) {
        let childOption = this.options[index]
        this.$set(childOption, 'index', index + 1)
        child.option = childOption
      }
    })
  },
  created () {
    console.log('pagedetail--created')
  }
}
</script>

<style scoped>
</style>
