<template>
  <div class="tabbar">
    <!-- <van-nav-bar class="nav" title="Children" fixed> -->
    <!-- <van-icon name="search" slot="right" /> -->
    <!-- </van-nav-bar> -->
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000" route>
      <van-tabbar-item icon="icon iconfont icon-shouye" replace to="/MedicalApp/home">首页</van-tabbar-item>
      <van-tabbar-item icon="icon iconfont icon-fenlei" replace to="/MedicalApp/sort">分类</van-tabbar-item>
      <van-tabbar-item class="pos" replace to="/MedicalApp/interrogation">
        <div class="circle">
          <transition name="fade">
            <div class="mincircle icon iconfont icon-duihua"></div>
          </transition>
        </div>
        <div class="text">问诊</div>
      </van-tabbar-item>
      <van-tabbar-item icon="icon iconfont icon-xiaoxi" info="5" replace to="/MedicalApp/news">消息</van-tabbar-item>
      <van-tabbar-item icon="icon iconfont icon-wode" dot replace to="/MedicalApp/mine">我的</van-tabbar-item>
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
.pos {
  display: flex;
  text-align: center;

  .circle {
    position: absolute;
    z-index: 2;
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
    margin-left: 10px;
    margin-top: 19px;
    width: 30px;
    font-size: 100%;
  }
}
</style>