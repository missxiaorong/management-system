
<template>

<el-menu   theme="dark":default-active="activeIndex2" class="nav-menu" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">全部</el-menu-item>
   <el-menu-item index="2">未支付</el-menu-item>
  <el-menu-item index="3">待发货</el-menu-item>
    <el-menu-item index="4">待收货</el-menu-item>
      <el-menu-item index="5">交易成功</el-menu-item>
       <el-menu-item index="6">交易取消</el-menu-item>
</el-menu>

</template>


<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
.nav-menu{
    width: 100%;
}
.el-menu-item{
    margin:0;
    width: 10%;
    text-align: center;
}
</style>
