<!-- computed -->
<template>
  <div class=''>
    <div>{{fullName}} {{time}}</div>
    <button @click="updateName(1)">更新firstName</button>
    <button @click="updateName(2)">更新lastName</button>
    <button @click="updateTime">更新time</button>
    <button @click="updateFullName">更新fullName</button>
    <pre>
      效果跟watch一致，但是不能直接改变computed里面定义的数据
    </pre>
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
      firstName: 'hello',
      lastName: 'world',
      time: 1
    };
  },

  //计算属性 类似于data概念
  computed: {
    fullName () {
      console.log("计算了一次");
      return this.firstName + " " + this.lastName;
    }
    // fullName: {
    //   get () {
    //     console.log("计算了一次");
    //     return this.firstName + " " + this.lastName;
    //   },
    //   set (value) {
    //     console.log(value);
    //     var result = value.split(" ");
    //     this.firstName = result[0];
    //     this.lastName = result[1];
    //   }
    // }
  },

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
    updateName (num) {
      if (num == 1) {
        this.time++
        this.firstName = "hello" + this.time
      } else {
        this.time++
        this.lastName = "world" + this.time
      }
    },
    updateTime () {
      this.time++
    },
    updateFullName () {
      this.fullName = '你好 大佬'
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
</style>