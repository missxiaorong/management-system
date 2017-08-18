import Vue from 'vue'
import router from '../../router'
import axios from 'axios'
Vue.prototype.$http = axios
import * as mutations from '../type'
import {port_nav} from '../../api/port_url'
export default {
    state: {
      
        navList:[],
    },
    getters: {
        navList:state=>state.navList,
     
    },
    mutations: {
       SET_TABLE_LIST(state, { list }) {
            state.tableList = list
        },
    },
    actions:{
        getOrderNav({ commit }) {
        var url = port_nav.allOrderNav;
        axios.get(url).then((res) => {
            res = res.data;
            if (res.code === "000") {
                commit(mutations.SET_TABLE_LIST, { list: res.datas })
            }
        })
    },
    }
}


