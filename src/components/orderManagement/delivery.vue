  <template>
    <div class="e-table">
    <v-table :sign="sign"></v-table>
    <v-paging></v-paging>
    <router-view></router-view>
  </div>
</template>
<script>
import vSearch from '../common/search.vue';
import vPaging from '../common/paging.vue';
import vTable from '../common/table.vue';
import vNav from './nav.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    vSearch,
    vTable,
    vPaging,
    vNav
  },
  data(){
    return{
      sign:"delivery"
    }
  },
 
}
</script>

<style>

</style>