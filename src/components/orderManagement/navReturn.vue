
<template>
    <el-menu theme="dark" :default-active="activeIndex2" class="nav-menu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">申请退款</el-menu-item>
        <el-menu-item index="2">申请退货</el-menu-item>
        <el-menu-item index="3">退货中</el-menu-item>
        <el-menu-item index="4">退款中</el-menu-item>
        <el-menu-item index="5">已退货</el-menu-item>
        <el-menu-item index="6">已退款</el-menu-item>
         <el-menu-item index="7">已取消</el-menu-item>
    </el-menu>
</template>


<script>
export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<style scoped>
.nav-menu {
    width: 100%;
}

.el-menu-item {
    margin: 0;
    width: 10%;
    text-align: center;
}
</style>
