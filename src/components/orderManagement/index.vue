    <template>
    <div class="e-table">
      <v-search></v-search>
      <v-nav></v-nav>
      <v-table></v-table>
      <v-paging></v-paging>
      <router-view></router-view>
    </div>
  </template>

      <script>
  import vSearch from './search.vue';
  import vPaging from './paging.vue';
  import vTable from './table.vue';
  import vNav from './nav.vue'
  export default {
    name: 'app',
    components: {
      vSearch,
      vTable,
      vPaging,
      vNav
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