    <template>
    <div class="e-table">
      <v-table :sign="sign"></v-table>
      <v-paging></v-paging>
      <router-view></router-view>
    </div>
  </template>

      <script>
  import vPaging from '../common/paging.vue';
  import vTable from '../common/table.vue'
  export default {
    name: 'app',
    components: {
      vTable,
      vPaging
    },
    data(){
      return{
        sign:'act'
      }
    }
  }
  </script>


      <style>

  </style>