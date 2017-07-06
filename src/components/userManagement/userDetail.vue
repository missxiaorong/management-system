
 <template>
    <div class="user-detail">
    
      
        <el-table :data="tableData5" style="width: 100%" class="table">
            <el-table-column>
                <template scope="props">
                    <el-form label-position="left" class="demo-table-expand intable">
                        <el-form-item label="头像">
                            <img :src='props.row.img' class="user-img">
                        </el-form-item>
                        <el-form-item label="姓名">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="年龄">
                            <span>{{ props.row.age }}</span>
                        </el-form-item>
                         <el-form-item label="手机号">
                            <span>{{ props.row.phone }}</span>
                        </el-form-item>
                        <el-form-item label="地址">
                            <span>{{ props.row.address }}</span>
                        </el-form-item>
    
                    </el-form>
                </template>
            </el-table-column>
    
        </el-table>
    </div>
</template>


<script>
export default {
    data() {
        return {
            tableData5: [{
                img: 'https://img.alicdn.com/imgextra/i2/TB1sOUaMpXXXXcCXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
                name: '雨禾',
                age: '11',
                phone:'15109780201',
                address: '上海市普陀区真北路',
               
            }]
        }
    }
}
</script>
<style scoped>
.user-detail {
    width: 85%;
    float: right;
    margin-top: 60px;
}

.demo-table-expand {
    font-size: 0;
}

.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}

.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
    border-bottom: 1px solid #eaeefb;
}

.user-img {
    width: 100px;
    height: 100px;
}



.table {
    border-collapse: collapse;
    line-height: 1.5em;
}
</style>
