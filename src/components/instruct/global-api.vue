<template>
    <div class="globalApi">
        <h1 class="title">全局api,自定义指令</h1>
        <div class="box">
            <h1>Vue.directive</h1>
            <div v-jspang="color">{{count}}</div>
            <button @click="addCount">add</button>
            <button @click="$destroy()">销毁</button>
            <div v-jspang="color">测试字体颜色改变</div>
            <h4>自定义指令中传递的三个参数:</h4>
            <p>el: 指令所绑定的元素,可以用来直接操作DOM</p>
            <p>binding: 一个对象,包含指令的很多信息。</p>
            <p>vnode: Vue编译生成的虚拟节点。</p>
            <h3>自定义指令的生命周期</h3>
            <p>自定义指令有五个生命周期（也叫钩子函数），分别是 bind,inserted,update,componentUpdated,unbind</p>
            <p>1,bind:只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个绑定时执行一次的初始化动作。</p>
            <p>2,inserted:被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于document中）。</p>
            <p>3,update:被绑定于元素所在的模板更新时调用，而无论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。</p>
            <p>4,componentUpdated:被绑定元素所在模板完成一次更新周期时调用。</p>
            <p>5,unbind:只调用一次，指令与元素解绑时调用。</p>
               <pre>bind:function(){//被绑定
                    console.log('1 - bind');
                },</pre>
                <pre>inserted:function(){//绑定到节点
                    console.log('2 - inserted');
                },</pre>
                <pre>update:function(){//组件更新
                    console.log('3 - update');
                },</pre>
                <pre>componentUpdated:function(){//组件更新完成
                    console.log('4 - componentUpdated');
                },</pre>
                <pre>unbind:function(){//解绑
                    console.log('1 - bind');
                }</pre>
        </div>
    </div>
</template>
<script>
export default {
    name:'globalApi',
    data(){
        return {
            count: 10,
            color: "green",
        }
    },
    methods:{
        addCount(){
            this.count++
        }
    },
    directives:{
        jspang(el,binding,vnode){
            // console.log(el);
            // console.log(binding);
            // console.log(vnode);
            el.style='color:' +binding.value;
        },
    },
    // //生命周期
    //  beforeCreate:function(){
    //             console.log('1-beforeCreate 初始化之后');
    //         },
    //         created:function(){
    //             console.log('2-created 创建完成');
    //         },
    //         beforeMount:function(){
    //             console.log('3-beforeMount 挂载之前');
    //         },
    //         mounted:function(){
    //             console.log('4-mounted 被创建');
    //         },
    //         beforeUpdate:function(){
    //             console.log('5-beforeUpdate 数据更新前');
    //         },
    //         updated:function(){
    //             console.log('6-updated 被更新后');
    //         },
    //         activated:function(){
    //             console.log('7-activated');
    //         },
    //         deactivated:function(){
    //             console.log('8-deactivated');
    //         },
    //         beforeDestroy:function(){
    //             console.log('9-beforeDestroy 销毁之前');
    //         },
    //         destroyed:function(){
    //             console.log('10-destroyed 销毁之后')
    //         }
}
</script>
<style scoped>
.title{
    text-align:center;
}
.box {
  border-bottom: 1px solid gray;
  padding: 15px;
}
</style>
