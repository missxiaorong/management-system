
 <template>
    <div class="add">
    
        <el-table :data="tableData5" style="width: 100%" class="table">
            <el-table-column>
                <template scope="props">
                    <el-form label-position="left" label-width="120px" :inline="true">
                        
                        <el-form-item label="首页幻灯片标题">
                            <el-input></el-input>
                            <!--<span>请输入用户名</span>-->
                            <span class="help-inline">请输入首页幻灯片标题 </span>
                        </el-form-item>
    
                        <el-form-item label="链接">
                            <el-input></el-input>
                            <span class="help-inline">请输入首页幻灯片链接 </span>
                        </el-form-item>
                        <el-form-item label="备注">
                            <el-input></el-input>
                         
                        </el-form-item>
                        <el-form-item label="幻灯片图片">
                               <el-input type="file" id="file" v-on:change="mychange()" accept="image/*" multiple=""></el-input>
                              <span class="help-inline">请上传首页幻灯片图片  </span>
                        </el-form-item>
                       <el-form-item  class="img-item">
                    
                            <img :src='props.row.img' class="img">         
            
                        </el-form-item>
                         <el-button type="success" size="small" class="save" @click="handleDelete">保存</el-button>
                    </el-form>
                </template>
            </el-table-column>
    
        </el-table>
    </div>
</template>


<script>

export default {
    components: {

    },
    data() {
        return {
            tableData5: [{
                img: 'https://img.alicdn.com/imgextra/i2/TB1sOUaMpXXXXcCXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
                name: '雨禾',
                age: '11',
                phone: '15109780201',
                address: '上海市普陀区真北路',

            }]
        }
    }
}
</script>
<style scoped>
.add {
    width: 85%;
    float: right;
    margin-top: 60px;
}

.el-form {
    margin: 20px 5%;
}

.role {
    display: block;
    /*margin:50px;*/
}

.save {
    margin: 30px 200px;
}

.help-inline {
    display: inline;
    vertical-align: middle;
    color: #555555;
    margin-left: 5px;
}

.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}

.el-form-item {

    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
    border-bottom: 1px solid #eaeefb;
    height: 3em;
    position: relative;
}

.el-select {
    margin: 2px;
    width: 300px;
}

.el-input {
    padding-top: 6px;
    width: 300px;
}
.img-item{
    height: 150px;
    margin: 50px;
}
.img {
    width: 500px;
    height: 200px;
}

</style>
