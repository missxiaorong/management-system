<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
    
        <el-form-item label="订单状态">
            <el-select v-model="formInline.orderState" placeholder="请选择订单状态">
                <el-option label="全部" value="all" selected></el-option>
                <el-option label="待支付" value="waitpay"></el-option>
                <el-option label="待发货" value="waitfahuo"></el-option>
                <el-option label="退货" value="tuihuo"></el-option>
                <el-option label="退款" value="tuikuan"></el-option>
            </el-select>
        </el-form-item>
    
        <el-form-item label="订单号">
            <el-input v-model="formInline.order.orderId" placeholder="订单号"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
            <el-input v-model="formInline.order.username" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :rules="[ { type: 'number', message: '手机号必须为数字值'} ]">
            <el-input auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="时间选择">
            <el-date-picker v-model="value" type="datetimerange" placeholder="选择时间范围">
            </el-date-picker>
    
        </el-form-item>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
             <el-button type="success" @click="onExport">导出Excel</el-button>
              <el-button type="success" @click="onExport">批量发货</el-button>
        </el-form-item>
    
    </el-form>
</template>

 <script>

export default {
    data() {
        return {
            formInline: {
                order: '',
                region: '',
                orderState:'',
            },
            value: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],

        };
    }

}
</script>
<style>
.demo-form-inline {
    margin-top: 10px;
  
}
.el-form-item{
    padding: 0;
    margin: 0;
}
.el-icon-caret-top{
    margin-top: 20px;
}
</style>