import Vue from 'vue'
import router from '../../router'
import axios from 'axios'
Vue.prototype.$http = axios
import * as mutations from '../type'
import {port_table} from '../../api/port_url'
export default {
    state: {
        tableList: [],
        tableHead: [],
    },
    getters: {
        tableData: state => state.tableList,
        tableHead: state => state.tableHead,
    },
    mutations: {
        SET_TABLE_LIST(state, { list }) {
            state.tableList = list
        },
        SET_TABLE_HEAD(state, { list }) {
            state.tableHead = list
        },
    },
    actions:{
         getUserTableHead({ commit }) {
        let url =port_table.userTableHead;
        axios.get(url).then((res) => {
            res = res.data;
            console.log(res)
            if (res.code === "000") {
                commit(mutations.SET_TABLE_HEAD, { list: res.datas })
            }
        })
    },
    getUserList({ commit }) {
        var url = port_table.userTableList;
        axios.get(url).then((res) => {
            res = res.data;
            if (res.code === "000") {
                commit(mutations.SET_TABLE_LIST, { list: res.datas })
            }
        })
    },
     getGoodsTableHead(context) {
        let url = port_table.goodsTableHead;
        axios.get(url).then((res) => {
            res = res.data;
            if (res.code === "000") {
                context.commit(mutations.SET_TABLE_HEAD, { list: res.datas })
            }
        })
    },
    getGoodsList({ commit }) {
        var url = port_table.goodsTableList;
        axios.get(url).then((res) => {
            res = res.data;
            if (res.code === "000") {
                commit(mutations.SET_TABLE_LIST, { list: res.datas })
            }
        })
    },
      getOrderTableHead(context) {
        let url = port_table.orderTableHead;
        axios.get(url).then((res) => {
            res = res.data;
            if (res.code === "000") {
                context.commit(mutations.SET_TABLE_HEAD, { list: res.datas })
            }
        })
    },
    getOrderList({ commit }) {
        var url = port_table.allOrderTableList;
        axios.get(url).then((res) => {
            res = res.data;
            if (res.code === "000") {
                commit(mutations.SET_TABLE_LIST, { list: res.datas })
            }
        })
    },
    getActTableHead(context) {
        let url = port_table.actTableHead;
        axios.get(url).then((res) => {
            res = res.data;
            if (res.code === "000") {
                context.commit(mutations.SET_TABLE_HEAD, { list: res.datas })
            }
        })
    },
    getActList({ commit }) {
        var url =port_table.actTableList;
        axios.get(url).then((res) => {
            res = res.data;
            if (res.code === "000") {
                commit(mutations.SET_TABLE_LIST, { list: res.datas })
            }
        })
    },
    }
}


