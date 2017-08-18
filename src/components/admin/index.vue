    <template>
  <div class="e-table">

    <v-table :sign="sign"></v-table>
    <router-view></router-view>
  
  </div>
</template>

      <script>
import vTable from '../common/table.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    vTable,
  },
  data() {
    return {
      sign:"admin"
    }
  },
  
}
</script>

  <style>

</style>