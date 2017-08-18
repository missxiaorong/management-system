import Vue from 'vue'
import router from '../router'
import axios from 'axios'
Vue.prototype.$http = axios
import * as mutations from './type'
import {port_search} from '../api/port_url'
const actions = {
    // getUserSearchList(context) {
    //     let url = port_search.userSearchList;
    //     axios.get(url).then((res) => {
    //         res = res.data;
    //         if (res.code === "000") {
    //             context.commit(mutations.SET_SEARCH_LIST, { list: res.datas })
    //         }
    //     })
    // },
    // getUserTableHead({ commit }) {
    //     let url = "/api/getTableHead";
    //     axios.get(url).then((res) => {
    //         res = res.data;
    //         console.log(res)
    //         if (res.code === "000") {
    //             commit(mutations.SET_TABLE_HEAD, { list: res.datas })
    //         }
    //     })
    // },
    // getUserList({ commit }) {
    //     var url = "/api/getUsers";
    //     axios.get(url).then((res) => {
    //         res = res.data;
    //         if (res.code === "000") {
    //             commit(mutations.SET_TABLE_LIST, { list: res.datas })
    //         }
    //     })
    // },
    // getGoodsSearchList(context) {
    //     let url = "/api/getSearchList";
    //     axios.get(url).then((res) => {
    //         res = res.data;
    //         if (res.code === "000") {
    //             context.commit(mutations.SET_SEARCH_LIST, { list: res.datas })
    //         }
    //     })
    // },
    // getGoodsTableHead(context) {
    //     let url = "/api/getTableHead";
    //     axios.get(url).then((res) => {
    //         res = res.data;
    //         if (res.code === "000") {
    //             context.commit(mutations.SET_TABLE_HEAD, { list: res.datas })
    //         }
    //     })
    // },
    // getGoodsList({ commit }) {
    //     var url = "/api/getUsers";
    //     axios.get(url).then((res) => {
    //         res = res.data;
    //         if (res.code === "000") {
    //             commit(mutations.SET_TABLE_LIST, { list: res.datas })
    //         }
    //     })
    // },
    // getOrderSearchList(context) {
    //     let url = "/api/getSearchList";
    //     axios.get(url).then((res) => {
    //         res = res.data;
    //         if (res.code === "000") {
    //             context.commit(mutations.SET_SEARCH_LIST, { list: res.datas })
    //         }
    //     })
    // },
    // getOrderTableHead(context) {
    //     let url = "/api/getTableHead";
    //     axios.get(url).then((res) => {
    //         res = res.data;
    //         if (res.code === "000") {
    //             context.commit(mutations.SET_TABLE_HEAD, { list: res.datas })
    //         }
    //     })
    // },
    // getOrderList({ commit }) {
    //     var url = "/api/getUsers";
    //     axios.get(url).then((res) => {
    //         res = res.data;
    //         if (res.code === "000") {
    //             commit(mutations.SET_TABLE_LIST, { list: res.datas })
    //         }
    //     })
    // },
    getGoodsAdd({ commit }) {
        var url = "/api/addList";
        axios.get(url).then((res) => {
            res = res.data;
            console.log(res);
            if (res.code === "000") {
                commit(mutations.SET_ADD_LIST, { list: res.datas })
            }
        })
    },
    getActAdd({ commit }) {
        var url = "/api/addList";
        axios.get(url).then((res) => {
            res = res.data;
            if (res.code === "000") {
                commit(mutations.SET_ADD_LIST, { list: res.datas })
            }
        })
    },


    // getActTableHead(context) {
    //     let url = "/api/getTableHead";
    //     axios.get(url).then((res) => {
    //         res = res.data;
    //         if (res.code === "000") {
    //             context.commit(mutations.SET_TABLE_HEAD, { list: res.datas })
    //         }
    //     })
    // },
    // getActList({ commit }) {
    //     var url = "/api/getUsers";
    //     axios.get(url).then((res) => {
    //         res = res.data;
    //         if (res.code === "000") {
    //             commit(mutations.SET_TABLE_LIST, { list: res.datas })
    //         }
    //     })
    // },
    getOrderNav({ commit }) {
        var url = "/api/getOrderNav";
        axios.get(url).then((res) => {
            res = res.data;
            if (res.code === "000") {
                commit(mutations.SET_TABLE_LIST, { list: res.datas })
            }
        })
    },
    getDeatailId({ commit },params) {
        axios({
            url: '/api/getDeatailId',
            method: 'post',
            data: params,
        }).then((res) => {
            res = res.data;
            if (res.code === "000") {
                commit(mutations.SET_ADD_LIST, { list: res.datas })
                  router.push('/detail');
            }
        })
    },
     saveGoods({ commit },params) {
        axios({
            url: '',
            method: 'post',
            data: params,
        }).then((res) => {
           
        })
    }
}

export default actions