<template>
    <div class="vModel">
        <h1>vue实现双向绑定的原理</h1>
        <hr>
        <h4>1: v-model实现双向绑定</h4>
        <p>
            <el-input v-model="msg" placeholder="请输入内容"></el-input>
            <p>显示输入信息区域：{{msg}}</p>
            <p>显示计算属性信息区域：{{newMsg}}</p>
        </p>
        <hr>
        <h1>2:Object.defineProperty</h1>
        <pre>
            再说一下Object.defineProperty()；
            Object.defineProperty(obj,prop, descriptor),该方法接收3个参数 
            obj: 要在其上定义属性的对象。 
            prop：要定义或修改的属性的名称。 
            descriptor：给对象的属性添加特性描述，目前提供两种形式：数据描述和存取器描述。 
            返回值：这个操作的对象
        </pre>
        <pre>
            {{code1}}
        </pre>
        <pre>
            observe： 
            在Vue中的data:function(){}，里面的每一个属性，也就是需要observe的数据对象，会进行进行递归遍历，包括子属性对象的属性，都加上 setter和getter； 
            这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化
            模板解析： 
            接下来，complie会去解析模板指令，将模板中的变量替换成数据，然后再更新视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据变动了，
            就会接到通知更新视图
            watcher： 
            还有一位关键的角色-watcher:订阅者； 
            他是数据监听与模板解析之间通讯的桥梁， 
            1、在自身实例化时往属性订阅器(dep)里面添加自己 
            2、自身必须有一个update()方法 
            3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。
            MVVM:
            MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，
            最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。
                    </pre>
    </div>
</template>
<script>
export default {
  name: "vModel",
  data() {
    return {
      msg: "",
      msg2: {},
      code1:`
        <input type="text" id="a">
        <span id="b"></span>

        var obj = {
            hello: '值'
        };
        document.addEventListener('keyup', function(e) {
            obj.hello = e.target.value;
        });
        Object.defineProperty(obj, 'hello', {
            get: function() {
                console.log('get方法被调用了!');
            },
            set: function(newVal) {
                document.getElementById('a').value = newVal;
                document.getElementById('b').innerHTML = newVal;
            }
        })`
    };
  },
  computed: {
    newMsg: function() {
      return "我是计算属性的信息" + this.msg;
    }
  },
  
};
</script>
<style scoped>
.el-input {
  width: 20% !important;
}
</style>
