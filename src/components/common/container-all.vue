<template>
    <el-container>
        <el-header>
            <header-top></header-top>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <aside-left></aside-left>
            </el-aside>
            <el-container>
                <el-main>
                    <main-center></main-center>
                </el-main>
                <el-footer>
                    <footer-bottom></footer-bottom>
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>
<script>
import headerTop from "@/components/common/header-top";
import mainCenter from "@/components/common/main-center";
import asideLeft from "@/components/common/aside-left";
import footerBottom from "@/components/common/footer-bottom";
export default {
  name: "container",
  components: {
    headerTop,
    mainCenter,
    asideLeft,
    footerBottom
  }
};
</script>
<style scoped>
.el-header,.el-footer{
    padding:0;
}
</style>
