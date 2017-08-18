
 <template>
    <div class="add">
        <el-form label-position="left" class="demo-table-expand intable " :inline="true" @submit.prevent="submit">
            <div class="input-box" v-for="(item, index) in addData" :key="index">
                <el-form-item :label="item.label">
                    <el-input v-if="item.type=='input'" v-model="item.val"></el-input>
                    <div v-if="item.type=='img'">
                        <img :src='item.url' class="good-img">
                        <input type="file" id="file" v-on:change="mychange()" accept="image/*" multiple="">
                    </div>
                    <span :name="item.name" v-if="item.type=='text'"></span>
                    <ueditor @ready="editorReady" :name="item.name" v-if="item.type=='ueditor'"></ueditor>
                    <el-radio-group v-if="item.type=='radio'" v-model="item.val">
                        <el-radio v-for="(radio,sub_index) in item.radioGroup" :key="sub_index" :label="radio.label"></el-radio>
                    </el-radio-group>
                    <el-select v-if="item.type=='select'" v-model="item.val" :name="item.name" :placeholder="item.label">
                        <el-option v-for="(option, sub_index) in item.options" :key="sub_index" :label="option.label" :value="option.value" selected></el-option>
                    </el-select>
                    <el-tree class="tree" v-if="item.type=='tree'" :data="data2" ref="tree" highlight-current show-checkbox node-key="id" :default-expanded-keys="[1,]" :default-checked-keys="[1]" :props="defaultProps"></el-tree>
                    <span class="title-inline">{{item.title}}</span>
                </el-form-item>
                <div v-if="item.label=='图标'">
                    <p>
                        可选图标：
                    </p>
                    <v-icon></v-icon>
                </div>
            </div>
            <el-button type="success" size="small" class="save" @click="handleSave">保存</el-button>
        </el-form>
        <router-view></router-view>
    </div>
</template>
<script>
import Ueditor from './ueditor'
import RoleTree from './roletree'
import vIcon from './icon'
import { mapActions, mapGetters } from 'vuex'
import api from '../../common/api'
export default {
    props: {
    },
    components: {
        Ueditor,
        RoleTree,
        vIcon

    },
    data() {
        return {
            addData:[],
            data2: [{
                id: 1,
                label: '后台系统管理',
                children: [{
                    id: 4,
                    label: '用户管理',
                },
                {
                    id: 2,
                    label: '商品管理',
                    children: [{
                        id: 5,
                        label: '商品列表'
                    }, {
                        id: 6,
                        label: ' 添加商品'
                    }]
                },
                {
                    id: 3,
                    label: '活动管理',
                    children: [{
                        id: 5,
                        label: '首页幻灯片列表'
                    }, {
                        id: 6,
                        label: ' 添加首页幻灯片'
                    }]
                },
                {
                    id: 4,
                    label: '订单管理',
                    children: [{
                        id: 5,
                        label: '订单列表'
                    }, {
                        id: 6,
                        label: ' 批量发货'
                    },
                    {
                        id: 6,
                        label: ' 退货/退款列表'
                    }]
                },
                {
                    id: 3,
                    label: '角色管理',
                    children: [{
                        id: 5,
                        label: '角色列表'
                    }, {
                        id: 6,
                        label: ' 角色添加'
                    }]
                }

                ]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }


        }
    },
    created() {
        this.handle(),
        this.getList()
    },
    methods: {

        getList() {
            var add_url = api.getUrl(this.sign).add_url
            this.$http.get(add_url).then((res) => {
                res = res.data;
                this.addData = res.data;
            })
        },
        handleSave() {
            var formData = this.addData;
            if (this.sign == '2') {
                this.$store.dispatch('addGoods', formData)
            }
            if (this.sign == '3') {
                this.$store.dispatch('addAct', params)
            }
            if (this.sign == '4') {
                this.$store.dispatch('addPrivilege', params)
            }
            if (this.sign == '5') {
                this.$store.dispatch('addRole', params)
            }
            if (this.sign == '6') {
                this.$store.dispatch('addAdmin', params)
            }
        },
        editorReady(instance) {
            instance.setContent('');

            instance.addListener('contentChange', () => {
                this.content = instance.getContent();
            });
        },
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
    color: red;
    height: 50px;
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
</style>

