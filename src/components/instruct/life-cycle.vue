<template>
    <div class="lifeCycle">
        <p>{{ message }}</p>
        <button @click="changeMsg">改变</button>
        <button @click="$destroy()">销毁</button>
        <button @click="changeMsg2">改变</button>
        <hr>
        <p>Vue实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模板、挂载Dom、渲染→更新→渲染、卸载等一系列过程，我们称这是Vue的生命周期</p>
        <img src="@/assets/images/lifecycle.jpg" alt="" width="800px">
        <pre>
        Vue提供的可以注册的钩子都在上图片的红色框标注。 他们是：

        beforeCreate
        在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。

        created
        实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。

        beforeMount
        在挂载开始之前被调用：相关的 render 函数首次被调用。

        mounted
        el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。

        beforeUpdate
        数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。

        updated
        由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

        当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。

        该钩子在服务器端渲染期间不被调用。

        beforeDestroy
        实例销毁之前调用。在这一步，实例仍然完全可用。

        destroyed
        Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用
        </pre>
    </div>
</template>
<script>
export default {
  name: "lifeCycle",
  data() {
    return {
      message: "I am a boy!"
    };
  },
  methods: {
    changeMsg() {
      this.message = "you are a girl!";
    },
    changeMsg2() {
      this.message = "it is a dog!";
    },
  },
  beforeCreate: function() {
    console.group("beforeCreate 创建前状态===============》");
    console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
    console.log("%c%s", "color:red", "message: " + this.message);//undefined
  },
//   created: function() {
//     console.group("created 创建完毕状态===============》");
//     console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
//     console.log(this.$el);
//     console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
//     console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
//   },
//   beforeMount: function() {
//     console.group("beforeMount 挂载前状态===============》");
//     console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
//     console.log(this.$el);
//     console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
//     console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
//   },
//   mounted: function() {
//     console.group("mounted 挂载结束状态===============》");
//     console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
//     console.log(this.$el);
//     console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
//     console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
//   },
//   beforeUpdate: function() {
//     console.group("beforeUpdate 更新前状态===============》");
//     console.log("%c%s", "color:red", "el     : " + this.$el);
//     console.log(this.$el);
//     console.log("%c%s", "color:red", "data   : " + this.$data);
//     console.log("%c%s", "color:red", "message: " + this.message);
//   },
//   updated: function() {
//     console.group("updated 更新完成状态===============》");
//     console.log("%c%s", "color:red", "el     : " + this.$el);
//     console.log(this.$el);
//     console.log("%c%s", "color:red", "data   : " + this.$data);
//     console.log("%c%s", "color:red", "message: " + this.message);
//   },
//   beforeDestroy: function() {
//     console.group("beforeDestroy 销毁前状态===============》");
//     console.log("%c%s", "color:red", "el     : " + this.$el);
//     console.log(this.$el);
//     console.log("%c%s", "color:red", "data   : " + this.$data);
//     console.log("%c%s", "color:red", "message: " + this.message);
//   },
//   destroyed: function() {
//     console.group("destroyed 销毁完成状态===============》");
//     console.log("%c%s", "color:red", "el     : " + this.$el);
//     console.log(this.$el);
//     console.log("%c%s", "color:red", "data   : " + this.$data);
//     console.log("%c%s", "color:red", "message: " + this.message);
//   }, 
 
};
</script>

<style scoped>
pre{
  width: 1000px;
  float: left;
}
</style>
