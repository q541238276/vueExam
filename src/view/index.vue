<!-- 首页 -->
<template>
  <div class='indexMax'>
    <div class="heder">我是头部</div>
    <div class="indexMain">
      <div class="aside">
        <el-menu active-text-color="#61A0FF" class="trarn_menu" :unique-opened="true">
          <template v-for="(menu,index) in menuArr">
            <el-submenu :index="index+''" :key="index" v-if="menu.children&&menu.children.length">
              <template slot="title">
                <i class="icon iconfont"></i>
                <span>{{menu.name}}</span>
              </template>
              <el-menu-item-group>
                <template v-for="(child,ind) in menu.children">
                  <el-menu-item @click="jump(child.url,child.name,`${index}-${ind}`)" :key="ind" :index="index+'-'+ind">
                    {{child.name}}
                  </el-menu-item>
                </template>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item v-else @click="jump(menu.url,menu.name,`${index}`)" :key="index" :index="index+''">
              <i class="icon iconfont"></i>
              <span slot="title">{{menu.name}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
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
      menuArr: [
        {
          name: '基础', children: [
            { name: '1.{{}}数据绑定', url: '/aexam' },
            { name: '2.v-text，v-html表达式', url: '/bexam' },
            { name: '3.methods', url: '/cexam' },
            { name: '4.watch', url: '/cexam1' },
            { name: '5.computed', url: '/cexam2' },
          ]
        }
      ]
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
    jump (url) {
      this.$router.push(url);
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
.indexMax {
  width: 100%;
  height: 100vh;
  background: #fff;
}
.heder {
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
}
.indexMain {
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  align-items: flex-start;
}
.aside {
  width: 200px;
  height: 100%;
  border-right: 1px solid #ccc;
}
.content {
  height: calc(100% - 40px);
  width: calc(100% - 240px);
  margin: 20px;
}
</style>
<style>
.title {
  background: green;
  color: #fff;
}
</style>