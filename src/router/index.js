import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/tabbar/HomeContainer.vue'
import member from '../components/tabbar/MemberContainer.vue'
import shopcar from '../components/tabbar/ShopcarContainer.vue'
import search from '../components/tabbar/SearchContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/member', component: member },
    { path: '/shopcar', component: shopcar },
    { path: '/search', component: search }
  ],
  linkActiveClass: 'mui-active' // 覆盖默认路由高亮的类
})
