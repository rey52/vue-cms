<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swipeList" :key="item.id">
        <img :src="item.img" />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newsList">
          <img src="../../image/menu1.png">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../image/menu2.png">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../image/menu3.png">
          <div class="mui-media-body">商品买卖</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../image/menu4.png">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../image/menu5.png">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../image/menu6.png">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      // 保存轮播图的数组
      swipeList: []
    }
  },
  created () {
    this.getSwipe()
  },
  methods: {
    getSwipe () {
      // 获取轮播图数据的方法
      this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result => {
        if (result.body.status === 0) {
          this.swipeList = result.body.message
        } else {
          Toast('加载轮播图失败...')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: yellow;
    }
    &:nth-child(3) {
      background-color: blue;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9{
  background-color: white;
  border: none;
  .mui-table-view-cell{
    border: none;
    img{
      width: 60px;
      height: 60px;
    }
    .mui-media-body{
      font-size: 13px;
    }
  }
}
</style>
