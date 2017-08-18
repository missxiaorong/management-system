<template>
  <el-tree :data="data2" class="tree" show-checkbox node-key="id" :default-expanded-keys="[1,]" :default-checked-keys="[1]" :props="defaultProps">
  </el-tree>
</template>

<script>
export default {
  data() {
    return {
      data2: [{
        id: 1,
        label: '后台系统管理',
        children: [{
          id: 4,
          label: '用户管理',
        },
        {
          id: 2,
          label: '商品管理',
          children: [{
            id: 5,
            label: '商品列表'
          }, {
            id: 6,
            label: ' 添加商品'
          }]
        },
        {
          id: 3,
          label: '活动管理',
          children: [{
            id: 5,
            label: '首页幻灯片列表'
          }, {
            id: 6,
            label: ' 添加首页幻灯片'
          }]
        },
        {
          id: 4,
          label: '订单管理',
          children: [{
            id: 5,
            label: '订单列表'
          }, {
            id: 6,
            label: ' 批量发货'
          },
          {
            id: 6,
            label: ' 退货/退款列表'
          }]
        },
        {
          id: 3,
          label: '角色管理',
          children: [{
            id: 5,
            label: '角色列表'
          }, {
            id: 6,
            label: ' 角色添加'
          }]
        }
      
      ]}],


      defaultProps: {
      children: 'children',
        label: 'label'
    }
  };
},
  };
</script>
<style>
/*.tree{
  width: 90%;
}*/
</style>
