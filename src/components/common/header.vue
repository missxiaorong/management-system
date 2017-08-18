<template>
  <div>
    <header>
      <img src="../../assets/images/logo.png" alt="logo" class="header-logo">
        <el-menu class="el-menu-demo el-box" mode="horizontal">
          <el-submenu index="2" class="sub-box">
          <template slot="title" class="">
          <span>{{userName}}</span>
          </template>
          <el-menu-item index="2-1">修改密码</el-menu-item>
          <el-menu-item index="2-2"  @click="logout">退出</el-menu-item>
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
      userName:this.$store.state.users.currentUser.UserName,
      session_id:this.$store.state.users.currentUser.Session_id,
    };
  },
   methods:{
      go(el){
        this.$route.router.go({
          path: el
        })
     },

      logout() {
      
        this.$confirm('确认退出吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {
          let data = {
            session_id:this.session_id
          }
          this.$store.dispatch("userLogout",data);
        })
 },}
  
};
</script>
<style scoped>
@import '../../assets/css/style.css';
</style>
