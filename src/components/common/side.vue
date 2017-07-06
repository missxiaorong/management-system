<template>
  <div class="left-side">
    <div class="left-side-inner">
      <el-menu class="menu-box" theme="Light Gray" router  :default-active="$route.path">
        <div
          v-for="(item, index) in nav_menu_data"
          :key="index">
          <el-menu-item
            class="menu-list"
            v-if="typeof item.child === 'undefined'"
            :index="item.path">
            <i class="iconfont" :class="item.icon"></i>
            <span v-text="item.title" class="text"></span>
          </el-menu-item>
          <el-submenu
            :index="item.path"
            v-else>
            <template slot="title">
              <i class="iconfont" :class="item.icon"></i>
              <span v-text="item.title" class="text"></span>
            </template>
            <el-menu-item
              class="menu-list"
              v-for="(sub_item, sub_index) in item.child"
              :index="sub_item.path"
              :key="sub_index">
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
  export default{
    name: 'slide',
    data(){
      return {
        nav_menu_data: [
        {
          title: "主页",
          path: "/",
          icon: "icon-home"
        },
         {
          title: "用户管理",
          path: "/userManagement",
          icon: "icon-yonghuguanli",
        },
         {
          title: "商品管理",
          path: "/goodsManagement",
          icon: "icon-shangpinguanli"
        },
        {
          title: "活动管理",
          path: "/activityManagement",
          icon: "icon-huodongguanli"
        },
         {
          title: "订单管理",
          path: "/orderManagement",
          icon: "icon-caidantubiao-07",
           child: [
              {
            title: "全部订单",
            icon:"icon-daizhifu",
            path: "/orderManagement"
          },
           {
            title: "退货/退款",
            path: "/orderManagement/return",
            icon:"icon-ccgl-tuihuoyugao-1"
          }]
        },
        
        {
          title: "权限管理",
          path: "/privilegeManagement",
          icon: "icon-quanxianguanli",
          child: [{
            title: "用户管理",
            path: "/privilegeManagement/user"
          },
          {
            title: "角色管理",
            path: "/privilegeManagement/role"
          },
          {
            title: "功能管理",
            path: "/privilegeManagement/function"
          }]
        }]
      }
    }
  }
</script>

<style scoped>

@import '../../assets/css/side.css';
</style>