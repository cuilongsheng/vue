<template>
    <div class="routerEasy">
        <h1>{{title1}}</h1>
        <pre>
            import Vue from 'vue'   //引入Vue
            import Router from 'vue-router'  //引入vue-router
            import Hello from '@/components/Hello'  //引入根目录下的Hello.vue组件
            
            Vue.use(Router)  //Vue全局使用Router
            
            export default new Router({
            routes: [              //配置路由，这里是个数组
                {                    //每一个链接都是一个对象
                path: '/',         //链接路径
                name: 'Hello',     //路由名称，
                component: Hello   //对应的组件模板
                }
            ]
            })
        </pre>
        <h1>{{title2}}</h1>
        
    </div>
</template>
<script>
export default {
  name: "routerEasy",
  data(){
      return {
          title1:'基础router的用法',
          title2:'子路由'
      }
  }
};
</script>
