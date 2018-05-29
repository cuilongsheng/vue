<template>
    <div class="aside">
        <el-row class="tac">
            <el-col>
                <el-menu ref="ul" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#66b1ff">
                    <router-link to="/">
                        <el-menu-item index="1">
                            <i class="el-icon-menu"></i>
                            <span slot="title">
                                主页
                            </span>
                        </el-menu-item>
                    </router-link>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>指令</span>
                        </template>
                        <el-menu-item-group>
                            <router-link to="/v-instruct">
                                <el-menu-item index="2-1">
                                    vInstruct
                                </el-menu-item>
                            </router-link>
                            <router-link to="/global-api">
                                <el-menu-item index="2-2">
                                    globalApi
                                </el-menu-item>
                            </router-link>
                            <router-link to="/life-cycle">
                                <el-menu-item index="2-3">
                                    lifeCycle
                                </el-menu-item>
                            </router-link>
                            <router-link to="/v-model">
                                <el-menu-item index="2-4">
                                    vModel
                                </el-menu-item>
                            </router-link>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>路由</span>
                        </template>
                        <el-menu-item-group>
                            <router-link to="/router-easy">
                                <el-menu-item index="3-1">
                                    基础路由
                                </el-menu-item>
                            </router-link>
                                    <el-submenu index="3-2">
                                        <span slot="title">子路由</span>
                                        <router-link to="/router-easy/easy-one"><el-menu-item index="3-2-1">easy-one</el-menu-item></router-link>
                                        <router-link to="/router-easy/easy-two"><el-menu-item index="3-2-2">easy-two</el-menu-item></router-link>
                                    </el-submenu>
                             <router-link to="/router-param">
                                <el-menu-item index="3-3">
                                    路由传递参数
                                </el-menu-item>
                            </router-link>       
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>Vuex</span>
                        </template>
                        <el-menu-item-group>
                            <router-link to="/footbal-score">
                                <el-menu-item index="4-1">
                                    比赛得分
                                </el-menu-item>
                            </router-link>
                            
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="5">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  name: "asideLeft",
  mounted() {
    // let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight;//浏览器高度;
    // let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;//浏览器宽度
    // console.log(this.$refs.ul.$el);
    // this.$refs.ul.$el.style.height = (h-60) +'px';
    this.$refs.ul.$el.style.height = "100%";
    this.$refs.ul.$el.style.backgroundColor = "#545c64";
    this.$refs.ul.$el.style.position = "fixed";
    this.$refs.ul.$el.style.width = "200px";
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
</style>

