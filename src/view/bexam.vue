<!-- v-text，v-html表达式 -->
<template>
  <div class=''>
    <p>{{name}}</p>
    <p v-text="name"></p>
    <p v-html="name"></p>

    <hr>
    <p>{{info}} test</p>
    <p v-text="info">test</p>
    <p v-html="info">test</p>

    <hr>
    <p>{{info}} test</p>
    <p v-text="info + ' test'">111</p>
    <p v-html="info + ' test'">222</p>
    <hr>
    <pre>
    插值表达式：可以输出非 HTML 标签数据，无法转义 HTML 标签；
　　v-text：可以输出非 HTML 标签数据，无法转义 HTML 标签；
　　v-html：可以输出非 HTML 标签数据，可以转义 HTML 标签；
    </pre>
    <br>
    <pre>
      想要在数据后面添加其他数据：
        插值表达式直接在后面添加；
    　　v-text：需要在后面拼接，同时标签内的内容将无法输出。
    　　v-html：需要在后面拼接，同时标签内的内容将无法输出。
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
      name: 'zhangsan',
      info: '<h1>I like vue</h1>'
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