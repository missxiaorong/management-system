<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="商品名称">
        <el-input v-model="formInline.goods.gname" placeholder="商品名称" style="width:300px;"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
        <el-button type="success" class="btn">
          <i class="el-icon-plus add"></i>增加</el-button>
        <el-button type="danger" class="btn">
          <i class="el-icon-minus  delete"></i>删除</el-button>
      </el-form-item>
    </el-form>
    <!--表格-->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection">
      </el-table-column>
      <el-table-column prop="img" label="商品图片" width="180">
        <template scope="scope">
          <img :src='scope.row.img' class="good-img">
        </template>
      </el-table-column>
      <el-table-column prop="gname" label="商品名称" width="250">
      </el-table-column>
      <el-table-column prop="price" label="商品价格" width="150">
      </el-table-column>
      <el-table-column prop="stock" label="库存" width="100">
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button type="success" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="primary" size="small"  @click="up(scope.row)">上移</el-button>
          <el-button type="primary" size="small"  @click="down(scope.row)">下移</el-button>
          <el-button type="primary" size="small"  @click="upIndex(scope.row)">置顶</el-button>
          <el-button type="warning" size="small" @click="handleEdit(scope.$index, scope.row)">禁用</el-button>
          <el-button type="danger" size="small" @click="handleDelete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--表格-->
  </div>
</template>

<script src="../../assets/js/move.js"></script>
<script>
var tableData=[];
var arr=[];
var index1='';
var index2=''
var direction='';
const ERR_OK = "000";
export default {
  data() {

    return {
      myAppList: [],
      formInline: {
        goods: {
          img: '',
          gname: '',
          price: '',
          stock: ''
        }
      },
      tableData: [],
    };
  },
  created() {
    this.$http.get('/api/getGoods').then((response) => {
      response = response.data;
      if (response.code === ERR_OK) {
        this.tableData = response.datas;
      }
    });
  },

  methods: {

    handleEdit(index, row) {
      this.$router.push({ path: '/userManagement/goodDetail', params: { goodId: index } })
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
    },
    swapItems(arr, index1, index2, direction) {
      if (direction == 'up') {//置顶
        arr.unshift(arr[index1]);
        arr.splice(index1 + 1, 1);
        return arr;
      }
      if (direction == 'down') {//置底
        arr.push(arr[index1]);
        arr.splice(index1, 1);
        return arr;
      }
      arr[index1] = arr.splice(index2, 1, arr[index1])[0];
      return arr;
    },
    //然后js调用
    upIndex(index) {//置顶
      alert(index);
      if (index == 0) {
        return;
      }
      this.swapItems(tableData, index, 0, 'up');
    },
    up(index) {//上移
      console.log(index);
      if (index == 0) {
        return;
      }
      swapItems(tableData, index, index - 1);
    },
    down(index) {//下移
      if (index == tableData.length - 1) {
        return;
      }
      this.swapItems(tableData, index, index + 1);
    },
    upIndex: function (index) {
      if (index == 0) {
        return;
      }
      this.swapItems(tableData, index, 0, 'up');
    },
    up: function (index) {
      if (index == 0) {
        return;
      }
      this.swapItems(tableData, index, index - 1);
    },
    down: function (index) {
      if (index == tableData.length - 1) {
        return;
      }
      this.swapItems(tableData, index, index + 1);
    },
    downIndex: function (index) {
      if (index == tableData.length - 1) {
        return;
      }
      this.swapItems(tableData, index, 0, 'down');
    },
    

  }
}
</script>
<style>
.demo-form-inline {
  margin-top: 20px;
}

.good-img {
  width: 60px;
  height: 60px;
  padding: 10px;
}
</style>



