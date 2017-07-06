    <template>
    <div class="e-table">
      <v-table></v-table>
      <v-paging></v-paging>
      <router-view></router-view>
    </div>
  </template>

      <script>
  import vPaging from './paging.vue';
  import vTable from './table.vue'
  export default {
    name: 'app',
    components: {
      vTable,
      vPaging
    }
  }
  </script>

      <style>
  .e-table {
    width: 85%;
    float: right;
    margin-top: 60px;
  }
  .el-input__inner {
    float: right;
  }
  </style>