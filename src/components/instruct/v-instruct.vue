<template>
    <div class="helloWorld">
        <div class="box">
            <h1>v-if 判断是否加载</h1>
            <p>v-if的是否加载和v-show的display:none隐藏不同</p>
            <div class="one" v-if="isLogin">Hello Cui!</div>
            <div class="two" v-else>Hello LongSheng!</div>
        </div>
        <div class="box">
            <h1>v-show 设置元素的display:none</h1>
            <div v-text="hiddenEl"></div>
            <div class="three" v-show="isLogin">我是隐藏的</div>
        </div>
        <div class="box">
            <h4>v-if 和v-show的区别：</h4>
            <p> v-if： 判断是否加载，可以减轻服务器的压力，在需要时加载。 </p>
            <p> v-show：调整css dispaly属性，可以使客户端操作更加流畅。</p>
        </div>
        <div class="box">
            <h1>v-for:</h1>
            <p>1,循环数组元素</p>
            <span v-for="item in items">{{item}},</span>
            <p>2,循环对象</p>
            <ul>用户:
                <li v-for="list in lists">{{list}}</li>
            </ul>
            <p>3,循环数组对象</p>
            <ol>
                <li v-for="car in cars">{{car.name}}</li>
            </ol>
            <ul>
                <li v-for="student in students">{{student.name}}--{{student.age}}</li>
            </ul>
        </div>
        <div class="box">
            <h1>v-text & v-html</h1>
            模板渲染:
            <p>{{messageInfo}}</p>
            v-text:
            <p v-text="messageInfo"></p>
            v-html:
            <p v-html="messageInfo"></p>
        </div>
        <div class="box">
            <h1>v-on 就是监听事件</h1>
            <p>皇马 vs 巴萨</p>
            <p>比分: {{hmScore}} : {{bsScore}}</p>
            <br/>
            <el-row>
                <el-button type="primary" round @click="addScore1">
                    <i class="el-icon-plus"></i>
                </el-button>
                <el-button type="info" round @click="addScore2">
                    <i class="el-icon-plus"></i>
                </el-button>
            </el-row>
        </div>
        <div class="box">
            <h1>v-model实现双向绑定</h1>
            <p>原始文本信息: {{inputMsg}}</p>
            <input type="text" v-model.lazy="inputMsg">
            <input type="text" v-model.number="inputMsg">
            <input type="text" v-model.trim="inputMsg">
            <p>文本域绑定</p>
            <p>原始文本信息:{{textareaMsg}}</p>
            <textarea name="" id="" cols="30" rows="10" v-model="textareaMsg"></textarea>
            <p>单选按钮</p>
            <input type="radio" value="男" id="one" v-model="sex">
            <label for="one">男</label>
            <input type="radio" value="女" id="two" v-model="sex">
            <label for="two">女</label>
            <p>{{sex}}</p>
            <h3>多选绑定一个数组</h3>
            <p>
                <input type="checkbox" id="JSPang" value="JSPang" v-model="web_Names">
                <label for="JSPang">JSPang</label><br/>
                <input type="checkbox" id="Panda" value="Panda" v-model="web_Names">
                <label for="Panda">Panda</label><br/>
                <input type="checkbox" id="PanPan" value="PanPan" v-model="web_Names">
                <label for="PanPan">PanPan</label>
                <p>{{web_Names}}</p>
            </p>
        </div>
        <div class="box">
            <h1>v-bind是处理HTML中的标签属性的</h1>
            <img src="@/assets/images/01.jpg" alt="" width="300px">
            <img :src="showImg" alt="" width="200px" @click="changeImg">
            <h4>v-bind绑定css样式</h4>
            <p>在绑定CSS样式是，绑定的值必须在vue中的data属性中进行声明</p>
            <div :class="classA">1,绑定classA</div>
            <div :class="{classA:isOk}">2,绑定class中的判断</div>
            <div :class="[classA,classB]">3,绑定class中的数组</div>
            <div :class="isOk?classA:classB">4,绑定class中的三元表达式</div>
            <div :style="{color:'blue',fontSize:font}">5,绑定style</div>
            <div :style="styleObj">6,用对象绑定style样式</div>
        </div>
        <div class="box">
            <h1>v-pre指令,跳过vue的编译,直接输出原始值</h1>
            <p v-pre>{{message}}</p>
            <h1>v-cloak在vue渲染完指定的整个DOM后才进行显示。它必须和CSS样式一起使用，</h1>
            <div v-cloak>
                {{ messageInfo }}
            </div>
            <h1>v-once指令在第一次DOM时进行渲染，渲染完成后视为静态内容，跳出以后的渲染过程。</h1>
            <div v-once>第一次绑定的值：{{messageInfo}}</div>
            <div><input type="text" v-model="messageInfo"></div>
        </div>
    </div>
</template>
<script>
import image02 from '@/assets/images/02.jpg'
import image03 from '@/assets/images/03.jpg'
export default {
  name: "helloWorld",
  data() {
    return {
      isLogin: false,
      hiddenEl: '<div class="three" v-show="isLogin">我是隐藏的</div>',
      items: [3, 5, 67, 21, 45, 900, 1, 20],
      lists: {
        name: "崔龙生",
        age: 29,
        sex: "男",
        job: "nothing"
      },
      cars: [
        {
          id: 1,
          name: "路虎"
        },
        {
          id: 2,
          name: "BYD"
        },
        {
          id: 3,
          name: "BMW"
        }
      ],
      students: [
        { name: "jspang", age: 32 },
        { name: "Panda", age: 30 },
        { name: "PanPaN", age: 21 },
        { name: "King", age: 45 }
      ],
      messageInfo: "<span>我叫崔龙生</span>",
      hmScore: 0,
      bsScore: 0,
      inputMsg: "这里显示您输入的值",
      textareaMsg: "我是textareaMsg",
      sex: "男",
      web_Names: [],
      showImg: image02,
      classA:'classA',
      classB:'classB',
      isOk:false,
      font:'28px',
      styleObj:{
          color:'red',
          fontSize:'20px',
          textDecoration:'underline'
      }
    };
  },
  methods: {
    addScore1() {
      this.hmScore++;
    },
    addScore2() {
      this.bsScore++;
    },
    changeImg(){
        this.showImg = image03
    }
  }
};
</script>
<style scoped>
.box {
  border-bottom: 1px solid gray;
  padding: 15px;
}
.box:nth-child(3) > p {
  text-indent: 25px;
}
.classA{
    color:red;
}
.classB{
    color:green;
}

[v-cloak] {
  display: none;
}
</style>
