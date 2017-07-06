<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="img" label="头像" width="150">
        <template scope="scope">
          <img :src='scope.row.img' class="user-img">
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="150">
      </el-table-column>
      <el-table-column prop="phone" label="手机号" width="250">
      </el-table-column>
      <el-table-column prop="address" label="地址" width="350">
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button type="primary" size="small" @click="handleCheck(scope.$index, scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script type="text/ecmascript-6">
const ERR_OK = "000";
export default {
  data() {
    return {
      formInline: {
        users: {
          img: '',
          name: '',
          phone: '',
          address: [],
          place: ''
        }
      },
      tableData: [],
    };
  },
  created() {
    this.$http.get('/api/getUsers').then((response) => {
      response = response.data;
      if (response.code === ERR_OK) {
        this.tableData = response.datas;
      }
    });
  },
  methods: {

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
