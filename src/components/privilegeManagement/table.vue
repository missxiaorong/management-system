<template>
  <div>
    <ul class="role-table col-xs-offset-2 col-md-offset-1 col-sm-offset-2">
      <li class="header">
        <div class="p p1">权限名称</div>
        <div class="p p2">路径</div>
        <div class="p p3">状态</div>
        <div class="p p4">操作</div>
      </li>
      <div class="vertical-line"></div>
      <div class="system">
        <i class="el-icon-setting"></i>
        <span v-cloak>系统管理</span>
      </div>
      <div class="line"></div>
      <li v-for="(item,index) in dataList" :key="item.id">
        <div class="h" @click="fold(item)">
          <i :class="{'el-icon-caret-right':item.folded,'el-icon-caret-bottom':!item.folded}" v-cloak  class="item-icon"></i>
         <span  v-cloak>{{item.title}}</span>
        </div>
        <div class="vertical-line2"></div>
        <div class="p2-content p-conent">
          <span> {{item.path}}</span>
        </div>
        <div class="p3-content p-conent">
          <el-tag> {{item.state}}</el-tag>
        </div>
        <div class="p4-content p-conent">
          <el-button type="primary"  @click="handleEdit()" v-model="item.firstCheckAll"> 编辑</el-button>
          <el-button type="danger"  @change="checkchildAll(item)" v-model="item.firstCheckAll"> 禁用</el-button>
        </div>
        <div class="vertical-line3"></div>
        <div class="line"></div>
        <ul v-show="item.child&&!item.folded">
          <li class="h40" v-for="(child,cur) in item.child" :key="child.id">
            <div class="child-title">
              {{child.title}}
            </div>
            <div class="child-path">
              {{child.path}}
            </div>
            <div class="child-state">
              <el-tag> {{child.state}} </el-tag>
            </div>
            <div class="child-op">
              <el-checkbox-group v-model="child.checkedCities" @change="handleCheckedCitiesChange(item,child)">
                <el-button type="primary" v-if="item.child" :indeterminate="item.isIndeterminate" @click="handleEdit()" v-model="item.firstCheckAll"> 编辑</el-button>
                <el-button  type="danger" v-if="item.child" :indeterminate="item.isIndeterminate" @change="checkchildAll(item)" v-model="item.firstCheckAll"> 禁用</el-button>
              </el-checkbox-group>
            </div>
            <div class="line"></div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style>
ul li{
list-style-type:none;
}
.role-table {
  border: 1px solid #e0e0e0;
  border-bottom: none;
  padding: 0;
  position: relative;
}

.header {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #e7e7e7;
  background: #F8F8F9;
  text-align: center;
}
.nochild{
  margin-left: 20px;
}
.vertical-line {
  width: 1px;
  height: 100%;
  background: #ddd;
  position: absolute;
  left: 25%;
  top: 0
}

.vertical-line2 {
  width: 1px;
  height: 100%;
  background: #ddd;
  position: absolute;
  left: 50%;
  top: 0
}

.vertical-line3 {
  width: 1px;
  height: 100%;
  background: #ddd;
  position: absolute;
  left: 65%;
  top: 0
}

.system {
  height: 35px;
  padding-left: 5px;
  padding-top: 10px;
}
.p{
  float: left;
  padding-left: 10px;
}
.p1 {
  width: 20%;
  user-select: none;
  cursor: pointer;
}

.p2 {
  width: 25%;
}

.p3 {
  width: 20%;
}

.p4 {
  width: 20%;
}

.one {
  padding-left: 20px;
}

.p-conent {
  float: left;
  padding-top: 10px;
}

.p2-content {
  width: 20%;
  margin-left: 15%;
}


.p3-content {
  margin-left:10%;
}
.p3-content .el-tag{
 margin-left: 0
}

.p4-content {
  margin-left: 11%;
}

.right {
  /*width: 70%;*/
  margin-left: 55%;
  float: left;

  padding-top: 5px;
}

.child-title {
  width: 15%;
  float: left;
}

.child-path {
  width: 15%;
  float: left;
  margin-left: 9%;
  text-align: center;
}

.child-state {
  width: 10%;
  float: left;
  margin-left: 13%;
  text-align: center;
}

.child-op {
  width: 20%;
  float: left;
  margin-left: 8%;
}

.item-icon {
  margin-left: -5px;
  padding: 5px;
}

.line {
  clear: both;
  width: 100%;
  height: 1px;
  background: #e0e0e0;
}


.h {
  width: 10%;
  height: 35px;
  float: left;
  padding-left: 20px;
  margin-top: 10px;
}

.h40 {
  height: 35px;
  padding-top: 10px;
}

[v-cloak] {
  display: none;
}
</style>
<script type="text/ecmascript-6">
import {getData} from '../../common/api'
export default {
  data() {
    return {
      tableData: [],
      dataList:[]
    }
  },
  created(){
    this.getDataList()
  },
  methods: {

    getDataList(){
       let dataList_url=getData.getSideList()
      this.dataList=dataList_url
    },
    fold: function (item) {
      if (typeof item.folded === "undefined") {
        this.$set(item, "folded", true);
      } else {
        item.folded = !item.folded;
      }
    },
     handleEdit(index, row) {
       alert(11);
      this.$router.push({ path: '/privilegeManagement/edit'})
     },
  
    // 没有二级菜单
    handleOneCheckedCitiesChange: function (item) {
      let checkedCount = item.checkedCities.length;
      if (typeof item.isIndeterminate === "undefined") {
        this.$set(item, "isIndeterminate", false);
      }
      if (typeof item.checkAll === "undefined") {
        this.$set(item, "checkAll", false);
      }
      item.isIndeterminate = checkedCount > 0 && checkedCount < item.list.length;
      item.checkAll = checkedCount === item.list.length;
    },
    handleOneCheckAll: function (event, item) {
      let arr = [];
      for (let a = 0; a < item.list.length; a++) {
        arr.push(item.list[a].id)
      }

      item.checkedCities = event.target.checked ? arr : [];
    }
  }
}
</script>