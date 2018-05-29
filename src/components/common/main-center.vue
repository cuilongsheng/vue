<template>
    <div class="main">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <router-view></router-view>
        <router-view name="easyView1" />
        <router-view name="easyView2" />
    </div>
</template>
<script>
import helloWorld from "@/components/instruct/hello-world";
export default {
  name: "mainCenter",
  components: {
    helloWorld
  }
};
</script>
<style scoped>
.hr{
    border:3px solid lightblue;
}
</style>
