
<template>
  <el-menu theme="dark" class="nav-menu" mode="horizontal" router :default-active="$route.path">
    <el-menu-item :index="item.path" v-for="(item, index) in nav_data" :key="index">{{item.title}}</el-menu-item>
  </el-menu>
</template>


<script>
export default {
   props: {
        navList:''
    },
  data() {
    return {
     nav_data:[]
    }
  },
    created() {
        this.getList()
    },
    methods: {
        getNav() {
            var nav_url = api.getUrl(this.navList)
            this.$http.get(add_url).then((res) => {
                res = res.data;
                this.nav_data = res.data;
            })
        },
      }
}
</script>
<style scoped>
.nav-menu {
  width: 100%;
}

.el-menu-item {
  margin: 0;
  width: 10%;
  text-align: center;
}
</style>
