
 <template>
    <div class="user-detail">
      
        <el-table :data="tableData5" style="width: 100%" >
            <el-table-column>
                <template scope="props">
                    <el-form label-position="left" :model="formInline" class="demo-table-expand intable " :inline="true" >
                        <el-form-item label="商品图片">
                            <img :src='props.row.img' class="good-img">
                            
<input type="file" id="file" v-on:change="mychange()" accept="image/*" multiple="">
                        </el-form-item>
                         <el-form-item label="商品名称">
                        <el-input v-model="formInline.good.gname" ></el-input>
                        </el-form-item>
                        <el-form-item label="商品价格">
                           <el-input v-model="formInline.good.price"></el-input>
                        </el-form-item>
                         <el-form-item label="商品促销价格">
                         <el-input v-model="formInline.good.sprice" ></el-input>
                        </el-form-item>
                        <el-form-item label="商品库存">
                             <el-input v-model="formInline.good.sprice" ></el-input>
                        </el-form-item>
                        <el-form-item label="商品编辑">
                      <ueditor @ready="editorReady" ></ueditor>
                       
                        </el-form-item>
                       
                    </el-form>
                </template>
            </el-table-column>
    
        </el-table>
         <router-view></router-view>
    </div>
</template>


<script>

import Ueditor from '../common/ueditor.vue'
export default {
     name: 'app',
    components: {
      Ueditor,
   
    },
    data() {
        return {
             content:'',
           
             formInline: {
                good: '',
                 gname: '雨禾',
                price: '11',
                phone:'15109780201',
                address: '上海市普陀区真北路',
            },
            tableData5: [{
                img: 'https://img.alicdn.com/imgextra/i2/TB1sOUaMpXXXXcCXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
                gname: '雨禾',
                price: '11',
                phone:'15109780201',
                address: '上海市普陀区真北路',
               
            }]
        }
    },
    methods:{
        editorReady (instance) {
        instance.setContent('');

        instance.addListener('contentChange', () => {
          this.content = instance.getContent();
        });
      },
        mychange: function() {
vue.files = document.getElementById("file").files;
// if (vue.files.length > 9) alert('选择大于9张，系统将只选择9张图片');
for(var i = 0; i < vue.files.length; i++){
var simpleFile = vue.files[i];
var reader = new FileReader();
reader.readAsDataURL(simpleFile);
reader.onload = function(e){
    console.log(this.result)
    document.getElementById("good-img").src=this.result;
    }
}
        }
    }
}
</script>
<style>
.user-detail {
    width: 85%;
    float: right;
    margin-top: 60px;
}

.demo-table-expand {
    font-size: 0;
}

.demo-table-expand label {
    width: 150px;
    color: #99a9bf;
}

.demo-table-expand .el-form-item {

    margin-right: 0;
    margin-bottom: 0;
    line-height: 50px;
    width: 100%;
    border-bottom: 1px solid #eaeefb;
}
.el-input{
    padding-top: 6px;
    width: 150%;
}
.good-img {
    width: 100px;
    height: 100px;
}



.table {
    border-collapse: collapse;
    line-height: 1.5em;
}
</style>
