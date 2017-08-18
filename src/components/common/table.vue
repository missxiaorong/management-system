<template>
  <div>
     <el-form v-if="sign!='act'&&sign!='delivery'&&sign!='role'&&sign!='admin'&& sign!='log'"  :inline="true" class="demo-form-inline" @submit.prevent="submit">
        <!-- 搜索项 -->
        <div class="input-box" v-for="(item, index) in searchData" :key="index">
            <el-form-item :label="item.label">
                <el-input v-if="item.type=='input'" v-model="item.val" :name="item.name" :placeholder="item.label"></el-input>
                <el-select v-if="item.type=='select'" v-model="item.val" :name="item.name" :placeholder="item.label">
                    <el-option v-for="(option, sub_index) in item.options" :key="sub_index" :label="option.label"  :value="option.value" selected></el-option>
                </el-select>
            <el-date-picker  v-if="item.type=='time'" v-model="item.val" :name="item.name" :placeholder="item.label" type="datetimerange" >
            </el-date-picker>
        </el-form-item>
            </el-form-item>
        </div>
        <!-- 搜索项结束 -->
        <el-form-item>
            <el-button type="primary" @click="search">查询</el-button>
            <el-button  v-if="sign=='order'" type="success" @click="onExport">导出Excel</el-button>
        </el-form-item>
    </el-form>
    <el-form :inline="true" v-if="sign=='delivery'" :model="formInline" class="btn-box">
      <el-form-item>
        <el-button type="success" @click="onExport">导出Excel</el-button>
        <el-button type="primary" @click="onExport">批量发货</el-button>
      </el-form-item>
    </el-form>
    <!--订单nav -->
    <el-menu v-if="sign=='order'|| sign=='return'"   theme="dark" class="nav-menu" mode="horizontal" router :default-active="$route.path">
    <el-menu-item :index="item.path" v-for="(item, index) in navData" :key="index">{{item.title}}</el-menu-item>
   </el-menu>
   <!--订单nav结束-->
    <el-table :data="tableData" border style="width: 100%">
      <div v-for="(item, index) in tableHead" :key="index">
        <el-table-column :label="item.label" :width="item.width">
          <template scope="scope">
            <img v-if="item.type=='img'" :src='scope.row.img' class="table-image">
            <div v-if="item.type=='state'">
              <el-tag v-for="(tag, index) in tableData" :key="index" :type="tag.type" close-transition>{{tag.name}}</el-tag>
            </div>
          </template>
        </el-table-column>
      </div>
      <el-table-column label="操作" width=" ">
        <template scope="scope">
          <el-button v-for="(handle, index) in handleData" :key="index" @click="handle.process(scope.$index)" :type="handle.type">{{handle.name}}</el-button>
        </template>
      </el-table-column>
  
    </el-table>
  </div>
</template>
<script type="text/ecmascript-6">
// import { port_getData } from '../../api'
import {getData} from '../../common/api'
export default {
  props: {
    sign: '',
    // handleData:''
  },
  created() {
    this.handle(),
    this.getList()
  },
  data() {
    return {
      tableHead:[],
      tableData:[],
      searchData:[],
      navData:[],
      handleData: [
        { process: this.handleEdit, name: '编辑', type: 'success' },
        { process: this.up, name: '上移', type: 'primary' },
        { process: this.down, name: '下移', type: 'primary' },
        { process: this.upIndex, name: '置顶', type: 'primary' },
        { process: this.handleDelete, name: '删除', type: 'danger' },
        { process: this.handleDevily, name: '发货', type: 'warning' },
      ],
      userHandle: [
        { process: this.handleEdit, name: '查看', type: 'success' },
      ],
      actHandle: [
        { process: this.handleEdit, name: '编辑', type: 'success' },
        { process: this.up, name: '上移', type: 'primary' },
        { process: this.down, name: '下移', type: 'primary' },
        { process: this.upIndex, name: '置顶', type: 'primary' },
        { process: this.handleDelete, name: '删除', type: 'danger' },
      ],
      orderHandle: [
        { process: this.handleEdit, name: '编辑', type: 'success' },
        { process: this.handleDelete, name: '删除', type: 'danger' },
        { process: this.handleDelete, name: '删除', type: 'danger' },
      ],
      goodsHandle: [
        { process: this.handleEdit, name: '编辑', type: 'success' },
        { process: this.up, name: '上移', type: 'primary' },
        { process: this.down, name: '下移', type: 'primary' },
        { process: this.upIndex, name: '置顶', type: 'primary' },
        { process: this.handleDelete, name: '删除', type: 'danger' },
      ],
      deliveryHandle: [
        { process: this.handleEdit, name: '编辑', type: 'success' },
        { process: this.handleDevily, name: '发货', type: 'warning' },
        { process: this.handleDelete, name: '删除', type: 'danger' },
      ],
      privilegeHandle: [
        { process: this.handleEdit, name: '编辑', type: 'success' },
        { process: this.handleDelete, name: '删除', type: 'danger' },
      ]

    }
  },
  methods: {
    handle() {
      if (this.sign == 1) {
        this.handleData = this.deliveryHandle
      }
      if (this.sign == 'goods') {
        this.handleData = this.goodsHandle
      }
    },
    handleEdit(index) {
      // alert(index);
      // this.$store.dispatch('getDeatailId',index)
      this.$router.push({ name: 'detail', params: { routeId: index } })

    },
    handleDelete() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        
        
         this.$http.get().then((res) => {
        res = res.data;
        if (res.code === "000") {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })}
        else{
          
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    })},
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

    //置顶
    upIndex: function (index) {
      if (index == 0) {
        return;
      }
      this.swapItems(this.tableData, index, 0, 'up');
    },
    //上移
    up: function (index) {
      if (index == 0) {
        return;
      }
      this.swapItems(this.tableData, index, index - 1);
    },
    //下移
    down: function (index) {
      if (index == this.tableData.length - 1) {
        return;
      }
      this.swapItems(this.tableData, index, index + 1);
    },
    getList() {
      // if (this.sign == "user") {

      //   var head_url = port_getData.userTableHead
      //   var table_url = port_getData.userTableList
      //   var searchList_url=port_getData.userSearchList
      //   var search_url = port_getData.userSearch
      // }
    
      // if (this.sign == "act") {
      //   var url = port_getData.addAct;
      // }
      // if (this.sign == "admin") {
      //   var url = port_getData.addAdmin;
      // }
      // if (this.sign == "role") {
      //   var url = port_getData.addRole;
      // }
      // if (this.sign == "priv") {
      //   var url = port_getData.addpriv;
      // }

     var head_url= getData.getUrl(this.sign).head_url
     var searchList_url= getData.getUrl(this.sign).searchList_url
     var table_url= getData.getUrl(this.sign).table_url
     var nav_url = getData.getUrl(this.sign).nav_url
     this.tableHead=head_url
     this.searchData=searchList_url
     this.navData=nav_url
      // }),
       this.$http.get(table_url).then((res) => {
      res = res.data;
     this.tableData=res.data;
      })
    },
      search() {
            var formData=JSON.stringify(this.searchData);
            this.$http.post(search_url,formData).then((res)=>{
                if(res.state=="success"){
                  this.tableData=res.data
                }
                
            }).catch(function(){
                console.log("服务器异常！")
            })
        }
  }
}
</script>
<style>
.demo-form-inline {
    margin-top: 20px;
    display: -webkit-flex;
    /* Safari */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap
}
</style>
