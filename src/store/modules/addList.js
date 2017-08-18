import Vue from 'vue'
import router from '../../router'
import axios from 'axios'
Vue.prototype.$http = axios
import * as mutations from '../type'
import {port_search} from '../../api/port_url'
export default {
    state: {
        addList: [],
    },
    getters: {
        addData: state => state.addList,
    },
    mutations: {
        SET_ADD_LIST(state, { list }) {
            state.addList = list
        }
    },
    actions: {
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
    }
}


