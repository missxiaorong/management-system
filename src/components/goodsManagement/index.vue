    <template>
    <div class="e-table">
  
      <v-table  :sign="sign"></v-table>
      <v-paging></v-paging>
      <router-view></router-view>
    </div>
  </template>

  <script>
  import { mapActions, mapGetters } from 'vuex'
  import vSearch from '../common/search.vue'
  import vPaging from '../common/paging.vue';
 import vTable from '../common/table.vue'
  export default {
    components: {
      vSearch,
      vTable,
      vPaging
    },
    data(){
      return{
        sign:'goods'
      }
    },
  }
   
  </script>

  <style>
  </style>