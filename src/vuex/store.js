import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0
};

const mutations = {
    add(state, n) {
        if (state.count >= 0) {
            state.count += n;
        } else {
            alert("分数不能为负值");
        }
    },
    reduce() {
        if (state.count > 0) {
            state.count--;
        } else {
            alert("分数不能为负值");
        }
    }
};

const getters = {
    count: state => state.count += 10
};

const actions = {
    addAction(context) {
        context.commit('add', 10);
        setTimeout(() => {
            context.commit('reduce');
            console.log('异步执行结束了');
        }, 5000);
        console.log('异步开始执行');
    },
    reduceAction({ commit }) {
        commit('reduce');
        console.log('我是reduce');
    }
};
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
});