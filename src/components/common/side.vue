<template>
 <div class="left-side">
    <div class="left-side-inner">
      <el-menu class="menu-box" theme="Light Gray" router :default-active="$route.path">
        <div v-for="(item, index) in navData" :key="index">
          <el-menu-item class="menu-list" v-if="typeof item.child === 'undefined'" :index="item.path">
            <i class="iconfont" :class="item.icon"></i>
            <span v-text="item.title" class="text"></span>
          </el-menu-item>
          <el-submenu :index="item.path" v-else>
            <template slot="title">
              <i class="iconfont" :class="item.icon"></i>
              <span v-text="item.title" class="text"></span>
            </template>
            <el-menu-item class="menu-list" v-for="(sub_item, sub_index) in item.child" :index="sub_item.path" :key="sub_index">
              <i class="iconfont" :class="sub_item.icon"></i>
              <span v-text="sub_item.title" class="text"></span>
            </el-menu-item>
          </el-submenu>
        </div>
      </el-menu>
    </div>
  </div>
</template>
<script type="text/javascript">
import {getData} from '../../common/api'
export default {
  name: 'slide',

  
  data() {
    const ERR_OK = "000";
    return {
     navData:''
    }
  },
  created(){
    this.getSideList()
  },
  methods:{
    getSideList(){
       let sideList_url=getData.getSideList() 
      this.navData=sideList_url;

    }
  }
  //  created() {
  //   this.$http.get('/api/getList').then((response) => {
  //     response = response.data;
  //     alert(response.code);
  //     if (response.code === "000") {
  //       this.nav_menu_data = response.datas;
  //     }
  //   });
  // },
}
</script>

<style scoped>
@import '../../assets/css/side.css';
</style>