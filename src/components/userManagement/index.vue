    <template>
    <div class="e-table">
      <v-search></v-search>
      <v-table></v-table>
      <v-paging></v-paging>
      <router-view></router-view>

    </div>
  </template>

      <script>
  import vSearch from './search.vue';
  import vPaging from './paging.vue';
  import vTable from './table.vue'
  export default {
    name: 'app',
    components: {
      vSearch,
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