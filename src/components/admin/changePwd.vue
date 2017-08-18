
 <template>
    <div class="add">
    
       <el-form label-position="left" class="demo-table-expand intable" :inline="true" @submit.prevent="submit">
                    
                    
                        <el-form-item class="sub-label" label="当前密码">
                            <el-input  ></el-input>
                              <span class="help-inline">请输入当前密码，出于安全考虑，密码不显示 </span>
                        </el-form-item>
                         <el-form-item class="sub-label" label="新密码">
                            <el-input  ></el-input>
                              <span class="help-inline">请输入当前密码，出于安全考虑，密码不显示 </span>
                        </el-form-item>
                        <el-form-item class="sub-label" label="确认新密码">
                            <el-input  ></el-input>
                              <span class="help-inline">请输入当前密码，出于安全考虑，密码不显示 </span>
                        </el-form-item>
                       
                         <el-button type="success" size="small" class="save" @click="handleDelete">保存</el-button>
                    </el-form>
           
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

.intable.el-form-item__label {
    width: 150px;
    background-color: green!important;
    color:red;
    height:50px;
    
}
.el-form-item__label{
    color:red;
}

.intable .el-form-item {

    margin-right: 0;
    margin-bottom: 0;
    line-height: 50px;
    width: 100%;
    border-bottom: 1px solid #eaeefb;
}

.el-input {
    padding-top: 6px;
    width: 150%;
}

.good-img {
    width: 100px;
    height: 100px;
}


.el-form {
    margin: 20px 5%;
}

.tree {
    width: 120%;
}

.save {
    margin: 30px 50%;
}

/*.intable label {
    width: 90px;
    color: #99a9bf;
}*/

.title-inline {
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

.table {
    border-collapse: collapse;
    line-height: 1.5em;
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

