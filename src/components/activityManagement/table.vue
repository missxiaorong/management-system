<template>
  <div>
    
    <!--表格-->
    <el-table :data="activityData" border style="width: 100%">
      <el-table-column prop="img" label="幻灯片图片" width="180">
        <template scope="scope">
          <img :src='scope.row.img' class="activity-img">
        </template>
      </el-table-column>
      <el-table-column prop="tname" label="幻灯片标题  " width="300">
      </el-table-column>
  
       <el-table-column prop="ttime" label="添加时间" width="200">
      </el-table-column>
      <el-table-column label="操作" >
        <template scope="scope">
          <el-button type="success" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">上移</el-button>
          <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">下移</el-button>
          <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">置顶</el-button>
          <el-button type="warning" size="small" @click="handleEdit(scope.$index, scope.row)">禁用</el-button>
          <el-button type="danger" size="small" @click="handleDelete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
   <!--表格-->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      formInline: {}
    };
  },
 created() {
    this.getActivityList()
  },
  computed: {
    ...mapGetters([
      'activityData'
    ])
  },

  methods: {
    ...mapActions([
      'getActivityList'
    ]),
    handleEdit(index, row) {
      this.$router.push({ path: '/ActivityManagement/edit'})
    },
    handleDelete() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }

  }
}
</script>
<style>
.add{
  color:#fff;
}
.btn{
  margin: 5px;
}
.demo-form-inline {
  margin-top: 20px;
}

.activity-img {
  width: 100px;
  height: 60px;
  padding: 10px;
}
</style>



