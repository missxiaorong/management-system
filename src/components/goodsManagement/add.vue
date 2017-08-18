
 <template>
    <div>
         <v-add  :sign="sign"></v-add>
        <router-view></router-view>
    </div>
</template>
<script>
import vAdd from '../common/add.vue'
export default {
    name: 'app',
    components: {
        vAdd,

    },
    data() {
        return {
            sign:'goods'
        }
    },
  
}
</script>
<style>
.add {
    width: 85%;
    float: right;
    margin-top: 60px;
}

/*.demo-table-expand {
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

.save {
    margin: 30px 50%;
}

.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}



.el-input {
    padding-top: 6px;
    width: 300px;
}

.table {
    border-collapse: collapse;
    line-height: 1.5em;
}*/
</style>
