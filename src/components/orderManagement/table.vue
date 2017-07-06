<template>
    <div>

<el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection">
        </el-table-column>
        <el-table-column prop="orderId" label="订单号" width="150">
        </el-table-column>
          <el-table-column prop="gname" label="商品名称" width="200">
        </el-table-column>
        <el-table-column prop="number" label="数量" width="70">
        </el-table-column>
          <el-table-column prop="money" label="金额" width="70">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="phone" label="手机号" width="150">
        </el-table-column>  

         <el-table-column
      prop="state"
      label="订单状态"
      width="100"
      :filters="[{ text: '待支付', value: '待支付' }, { text: '待发货', value: '待发货' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template scope="scope">
        <el-tag
          :type="scope.row.tag !== '待支付' ? 'primary' : 'success'"
          close-transition>{{scope.row.state}}</el-tag>
      </template>
    </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
             <el-button type="success" size="small" @click="handleEdit(scope.$index, scope.row)">发货</el-button>
             <!--<el-button type="danger" size="small" @click="handleEdit(scope.$index, scope.row)">退款</el-button>-->
            <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table> 
      
<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  size="tiny"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>


    </div>
 
</template>

<script type="text/ecmascript-6">
const ERR_OK = "000";
export default {
  data() {
    return {
      formInline: {
        orders: {
          orderId: '',
          gname: '',
          money: '',
          name: '',
          phone: '',
          state:''
        }
      },
      tableData: [],
    };
  },
  created() {
    this.$http.get('/api/getOrders').then((response) => {
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

