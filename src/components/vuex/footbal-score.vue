<template>
    <div class="score">
        <h2>{{title}}</h2>
        <!-- 推荐后一种写法 -->
        <h1 class="nowScore">{{$store.state.count}}----{{count}}</h1>
        <p>
            <el-button @click="$store.commit('add',10)">+</el-button>
            <el-button @click="reduce">-</el-button>
        </p>
        <hr>
        <p>
            <el-button @click="addAction">+</el-button>
            <el-button @click="reduceAction">-</el-button>
        </p>
    </div>
</template>
<script>
import store from "@/vuex/store";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "footbalScore",
  data() {
    return {
      title: "巴萨 VS 皇马"
    };
  },
  store,
  // computed:{//第一种写法
  //     count(){
  //         return this.$store.state.count;
  //     }
  // }
  // computed:mapState({//第二种写法
  //     count:state=>state.count
  // })
  // computed:mapState(['count']),//第三种写法
  // methods:mapMutations(['reduce']),
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["count"])
  },
  methods: {
    ...mapMutations(["reduce"]),
    ...mapActions(['addAction','reduceAction']),
  }
};
</script>

<style scoped>
.nowScore {
  font-size: 18px;
  width: 115px;
  text-align: center;
  line-height: 40px;
}
</style>
