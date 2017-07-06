<template>
 <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="20"
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </div>
</template>

<style>
 .el-pagination {
    text-align: center;
    margin-top: 30px;
  }

</style>
<<script>
export default {
  data(){
    return{
      currentPage: 1,
    }
  },
  methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
      }
  }
}
</script>

