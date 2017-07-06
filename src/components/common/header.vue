<template>
  <div>
    <header>
      <img src="../../assets/images/logo.png" alt="logo" class="header-logo">
  
      <el-menu class="el-menu-demo el-box" mode="horizontal">
  
        <el-submenu index="2" class="sub-box">
          <template slot="title" class="">

            <img src="../../assets/images/toux.jpg" class="img">
            <span>管理员</span>
          </template>
          <el-menu-item index="2-1">修改密码</el-menu-item>
          <el-menu-item index="2-2">退出</el-menu-item>
        </el-submenu>
  
      </el-menu>
  
    </header>
  </div>
</template>
<script>
export default {
  props: {
    user: {
    }
  },
  data() {
    return {
    };
  },
};
</script>
<style scoped>
@import '../../assets/css/style.css';
</style>
