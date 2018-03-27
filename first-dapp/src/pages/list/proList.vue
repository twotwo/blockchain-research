<template>
  <div class="prolistmain">
    <div class="pro-wrapper">
      <div class="pro-content">
        <ul class="ul-wrap">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>1</li>
          <li>2</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProList',
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
.prolistmain {
  padding-top: 120px;
}
.pro-wrapper {
  width: 70%;
  margin: 0 auto;
}
.ul-wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.ul-wrap li {
  width: 33%;
  height: 300px;
  border: #ccc 1px solid;
  text-align: center;
  box-sizing: border-box;
  background: #00E5EE;
  margin-top: 10px;
}
</style>
