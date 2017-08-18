import Vue from 'vue'
import router from '../../router'
import axios from 'axios'
Vue.prototype.$http = axios
import * as mutations from '../type'
import {port_search} from '../../api/port_url'
export default {
    state: {
        searchList: [],
    },
    getters: {  
        searchData: state => state.searchList,
    },
    mutations: {
     
        SET_SEARCH_LIST(state, { list }) {
            state.searchList = list
        },
    },
    actions:{
          getUserSearchList(context) {
        let url = port_search.userSearchList;
        axios.get(url).then((res) => {
            res = res.data;
            if (res.code === "000") {
                context.commit(mutations.SET_SEARCH_LIST, { list: res.datas })
            }
        })
    },
    
    getGoodsSearchList(context) {
        let url = port_search.goodsSearchList;
        axios.get(url).then((res) => {
            res = res.data;
            if (res.code === "000") {
                context.commit(mutations.SET_SEARCH_LIST, { list: res.datas })
            }
        })
    },
  
    getOrderSearchList(context) {
        let url = port_search.orderSearchList;
        axios.get(url).then((res) => {
            res = res.data;
            if (res.code === "000") {
                context.commit(mutations.SET_SEARCH_LIST, { list: res.datas })
            }
        })
    },
   

    }
}


