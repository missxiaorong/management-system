  <template>
    <div class="e-table">
    <v-table  :sign="sign"></v-table>
    <v-paging></v-paging>
    <router-view></router-view>
  </div>
</template>
<script>
import vPaging from '../common/paging.vue';
import vTable from '../common/table.vue';
export default {
  components: {
    vTable,
    vPaging
  },
  data(){
    return{
      sign:'return'
    }
  }
}
</script>

<style scoped>
.e-table {
  width: 85%;
  float: right;
  margin-top: 60px;
}

.el-input__inner {
  float: right;
}
</style>