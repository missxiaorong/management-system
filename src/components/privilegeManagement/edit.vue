
 <template>
    <div class="add">
    
        <el-table :data="tableData5" style="width: 100%" class="table">
            <el-table-column>
                <template scope="props">
                    <el-form label-position="left" class="demo-table-expand intable">
                        <el-form-item label="上级权限">                 
                                <el-select class="pchose"  v-model="form.last" placeholder="请选择">
                                <el-option label="用户管理" value="users"></el-option>
                                <el-option label="商品管理" value="goods"></el-option>
                                </el-select>
                                <span class="title-inline">请选择上级权限，不选默认是父级 </span>
                            </el-form-item>

                          
                        <el-form-item label="权限名称 ">
                           <el-input></el-input>
                            <span class="title-inline">请输入角色名称</span>
                        </el-form-item>
                        <el-form-item label="访问路径">
                            <el-input></el-input>
                            <span class="title-inline">访问路径，默认是default_view </span>
                        </el-form-item>
                         <el-form-item label="权限图标">
                             <el-input></el-input>
                            <span class="title-inline">权限图标，默认是icon-home </span>
                        </el-form-item>
                        <el-form-item label="权限状态">
                            <el-radio-group v-model="form.resource">
                            <el-radio label="启用"></el-radio>
                            <el-radio label="关闭"></el-radio>
                            </el-radio-group>

                        </el-form-item>
                        <el-form-item label="权限排序">
                             <el-input></el-input>
                            <span class="title-inline">权限排序，默认是0 </span>
                        </el-form-item>
                        
                    </el-form>
                </template>
            </el-table-column>
    
        </el-table>
<p>
    可选图标：
    </p>
      
    </div>
</template>


<script>
import RoleTree from './roletree'
export default {
    components:{
        RoleTree
    },
    data() {
        return {
              form: {
         last:'',
        
      },
     tableData5: [{
                img: 'https://img.alicdn.com/imgextra/i2/TB1sOUaMpXXXXcCXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
                name: '雨禾',
                age: '11',
                phone:'15109780201',
                address: '上海市普陀区真北路',
               
            }],
        }}
        
    }
</script>
<style scoped>
.add {
    width: 85%;
    float: right;
    margin-top: 60px;
}
.role{
    display: block;
    /*margin:50px;*/
}
.pchose{
    width: 30%;
}

.el-form {
    margin: 20px 5%;
}
.save {
    margin: 30px 50%;
}

.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}
/*
 .el-form-item {
     
     margin-right: 0;
    margin-bottom: 0;
    width: 100%;
    border-bottom: 1px solid #eaeefb;
    height: 3em;
    position: relative;
}*/
.title-inline{
    display: inline-block;
    vertical-align: middle;  
    color: #555;
    margin-left: 5px;
    margin-top: -20px;
}
.el-input {
    padding-top: 6px;
    width: 300px;
}
.icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    border: 1px solid #eaeefb;
    border-radius: 4px;
}
[class*=' icon-'], [class^=icon-] {
    font-family: icomoon !important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon-list li {
    float: left;
    width: 15%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: color .15s linear;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
}
.icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    border: 1px solid #eaeefb;
    border-radius: 4px;
}

</style>
