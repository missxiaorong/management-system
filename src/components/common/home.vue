<template>
  <el-row class="container" style="height: 100%">
    <v-header></v-header>
    <v-side></v-side>
    <router-view></router-view>
  </el-row>
</template>

<script>
import vHeader from './header.vue';
import vSide from './side.vue';
export default {
  name: 'app',
  components: {
    vHeader,
    vSide
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
