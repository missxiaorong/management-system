
 <template>
    <div class="user-detail">
    
      
        <el-table :data="tableData" style="width: 100%" class="table">
            <el-table-column v-for="(item, index) in tableData" :key="index" >
                <template scope="props">
                    <el-form label-position="left" class="demo-table-expand intable">
                        <el-form-item :label="item.label">
                            <div v-if="item.type=='img'">
                                    <img :src='item.url' class="good-img">
                                    <input type="file" id="file" v-on:change="mychange()" accept="image/*" multiple="">
                            </div>
                            <!--<img :src='props.row.img' class="user-img">-->
                            <span v-else>{{ item.val }}</span>
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
