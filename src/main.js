// 入口文件
import Vue from 'vue'
import app from './App.vue'
// 导入 mui 的样式
import 'mui/css/mui.min.css'
import 'mui/css/icons-extra.css'
// 导入 mint-ui 的样式
import 'mint-ui/lib/style.css'
// 顶部Header，滑动轮播Swipe、SwipeItem
import { Header, Swipe, SwipeItem } from 'mint-ui'
import router from './router/index'
// 安装启动路由
import Router from 'vue-router'
// 安装启动 vue-resource
import Resource from 'vue-resource'

Vue.use(Router)
Vue.use(Resource)
// 启动 mint-ui 组件
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

var vm = new Vue({
  el: '#app',
  router,
  render: c => c(app)
})
