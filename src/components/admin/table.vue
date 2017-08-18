<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
  
      <el-table-column prop="aname" label="用户名" width="120">
      </el-table-column>
      <el-table-column prop="nickname" label="昵称" width="120">
      </el-table-column>
      <el-table-column prop="aphone" label="手机" width="150">
      </el-table-column>
      <el-table-column prop="aemail" label="电子邮箱" width="150">
      </el-table-column>
      <el-table-column prop="arole" label="角色" width="120">
      </el-table-column>
      <el-table-column prop="state" label="状态" width="80">
        <template scope="scope">
          <el-button type="success" size="small">{{scope.row.astate}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="lasttime" label="上次登录时间" width="120">
      </el-table-column>
      <el-table-column prop="thistime" label="本次登录时间" width="120">
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button type="primary" size="small" @click="handleCheck(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script type="text/ecmascript-6">
import {mapActions, mapGetters } from 'vuex'
export default {

  created() {
    this.getUsers()
  },
  computed: {
    ...mapGetters([
      'usersData'
    ])
  },
  methods: {
    ...mapActions([
      'getUsers'
    ]),

    handleCheck(index, row) {
      this.$router.push({ path: '/userManagement/userDetail', params: { userId: index } })
      console.log(index);
    },

  }
};
</script>
<style>
.user-img {
  width: 60px;
  height: 60px;
  padding: 10px;
}
</style>
