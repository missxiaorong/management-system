
<template>
    <el-form :inline="true" class="demo-form-inline" @submit.prevent="submit">
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
        </el-form-item>
    </el-form>
</template>


<script>
import {mapActions, mapGetters } from 'vuex'
export default {
     props: {
    searchData: {
      type: Array,
      required: true
    }
  },
    data() {
        return {
        }
    },


  methods: {
    
        search() {
            var formData=JSON.stringify(this.searchData);
            console.log(formData);
            this.$http.post(url,formData).then(function(data){
                if(data.json().state=="success")
                console.log("success");
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


