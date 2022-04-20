<!-- 样式绑定 -->
<template>
  <div class=''>
    <div class="title">绑定calss</div>
    <p :class="{red : active}" @click="handleClick">{{title}}</p>
    <pre>
      当 active 时 red 成立
    </pre>

    <div class="title">绑定多个calss</div>
    <p :class="[red,fontSize]" @click="handleClicka">{{title}}</p>

    <div class="title">绑定样式</div>
    <p :style="styleObj" @click="handleClickc">{{title}}</p>

    <div class="title">绑定多个样式</div>
    <p :style="[styleObj, {fontSize:'30px'}]" @click="handleClickc">{{title}}</p>

    <div class="title">style内部写判断</div>
    <p :style="[{ color: flag?'red':'#000' },{fontSize:flag?'30px':'16px'}]" @click="handleClickd">{{title}}</p>
    <p :style="{ color: flag?'red':'#000' }" @click="handleClickd">{{title}}</p>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: '',

  //import引入的组件需要注入到对象中才能使用
  components: {},

  //父组件传入子组件数据
  props: {},

  //格式化数据
  filters: {},

  data () {
    //这里存放数据
    return {
      title: "hello world",
      active: false,
      red: "",
      fontSize: "font-size",
      styleObj: {
        color: "black"
      },
      flag: false
    };
  },

  //计算属性 类似于data概念
  computed: {},

  //监控data中的数据变化
  watch: {},

  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },

  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },

  //方法集合
  methods: {
    handleClick () {
      console.log("active 更改之前", this.active);
      this.active = !this.active;
      console.log("active 更改之后", this.active);
    },
    handleClicka () {
      console.log("执行前 red 数据", this.red);
      this.red = this.red === "red" ? "" : "red";
      console.log("执行后 red 数据", this.red);
    },
    handleClickc () {
      console.log("执行前 styleObj.color 数据", this.styleObj.color);
      this.styleObj.color = this.styleObj.color === "black" ? "red" : "black";
      console.log("执行后 styleObj.color 数据", this.styleObj.color);
    },
    handleClickd () {
      this.flag = !this.flag;
    }
  },

  beforeCreate () { }, //生命周期 - 创建之前
  beforeMount () { }, //生命周期 - 挂载之前
  beforeUpdate () { }, //生命周期 - 更新之前
  updated () { }, //生命周期 - 更新之后
  beforeDestroy () { }, //生命周期 - 销毁之前
  destroyed () { }, //生命周期 - 销毁完成
  activated () { }, //如果页面有keep-alive缓存功能，这个函数会触发
}

</script>

<style scoped lang=''>
/* 使用$符号可以标识一个变量;@import url(); 引入公共css类 */
.red {
  color: red;
}
.font-size {
  font-size: 30px;
}
</style>