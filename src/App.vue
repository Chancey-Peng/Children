<template>
  <div id="app">
    <van-nav-bar class="nav" title="Children" fixed>
      <!-- <van-icon name="search" slot="right" /> -->
    </van-nav-bar>
    <h1>猪猪猪</h1>
    <h1>猪猪猪</h1>
    <h1>猪猪猪</h1>
    <h1>猪猪猪</h1>
    <router-view />
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000" route>
      <van-tabbar-item icon="icon iconfont icon-shouye">首页</van-tabbar-item>
      <van-tabbar-item icon="icon iconfont icon-fenlei">分类</van-tabbar-item>
      <van-tabbar-item class="pos">
        <div class="circle">
          <div class="mincircle icon iconfont icon-duihua"></div>
        </div>
        <div class="text">问诊</div>
      </van-tabbar-item>
      <van-tabbar-item icon="icon iconfont icon-xiaoxi" info="5">消息</van-tabbar-item>
      <van-tabbar-item icon="icon iconfont icon-wode" dot>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="stylus" scoped>
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
  padding-top: 46px;
}

.nav {
  // background: #07c160;
  // border-bottom: 1px solid #e4e2e2;
}

.pos {
  display: flex;
  text-align: center;

  .circle {
    position: absolute;
    z-index: 2;
    // display: flex;
    bottom: 28px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    line-height: 50px;
    font-size: 40px;
    background: #fff;
    -moz-box-shadow: 2px 2px 10px #e4e2e2;
    -webkit-box-shadow: 2px 2px 10px #e4e2e2;
    box-shadow: 0px 0px 10px #e4e2e2;

    .mincircle {
      position: absolute;
      // margin: 0 auto;
      top: 3px;
      left: 3px;
      bottom: 3px;
      right: 3px;
      width: 45px;
      height: 45px;
      color: #fff;
      font-size: 30px;
      border-radius: 50%;
      background: #07c160;
    }
  }

  .text {
    // position: absolute;
    // bottom: 8px;
    margin-left: 10px;
    margin-top: 19px;
    width: 30px;
    font-size: 100%;
  }
}
</style>
