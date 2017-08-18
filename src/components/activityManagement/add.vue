
 <template>
    <div>
         <v-add :sign="sign"></v-add>
        <router-view></router-view>
    </div>
</template>


<script>
import vAdd from '../common/add.vue'
export default {
    name: 'app',
    components: {
        vAdd,

    },
    data() {
        return {
            sign:'act'
        }
    }
}
</script>
<style>

</style>
