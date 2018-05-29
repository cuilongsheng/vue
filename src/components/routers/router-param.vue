<template>
    <div class="routerParam">
        <h1>我是路由传参</h1>
        <p>一、用name传递参数</p>
        <p>在路由文件src/router/index.js里配置name属性。
            <pre>
                routes: [
                    {
                        path: '/',
                        name: 'Hello',
                        component: Hello
                    }
                    ]
            </pre>
        </p>
        <p>模板里(src/App.vue)用$route.name的形势接收，比如直接在模板中显示：</p>
        <pre>	
            {{info}}
        </pre>
    </div>
</template>
<script>
export default {
    name: 'routerParam',
    data(){
        return {
            info: '<p>{{ $route.name}}</p>'
        }
    }
}
</script>
