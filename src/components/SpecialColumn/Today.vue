<template>
  <div class="today">
    <div class="header">
      <span class="title">今日推荐</span>
      <router-link to="/">
        <div class="more">
          <!-- <p>更多</p> -->
          <span class="left">更多</span>
        </div>
      </router-link>
    </div>
    <div class="conter border-1px" v-for="(item,index) in today" :key="index">
      <div class="conter-left">
        <img :src="item.imgurl" alt />
      </div>
      <div class="conter-right">
        <span class="right-title">{{item.title}}</span>
        <p class="resume">{{item.resume}}</p>
        <p class="look">
          <i class="icon iconfont icon-liulan"></i>
          {{item.look}}浏览
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Today",
  data() {
    return {
      today: [
        {
          id: 0,
          imgurl: require(".././../assets/images/today/1.png"),
          title: "按摩能缓解酒后头晕头痛？",
          resume: "喝醉酒之后，如何缓解头痛、头晕、反胃等相关问题。",
          look: 681234
        },
        {
          id: 1,
          imgurl: require(".././../assets/images/today/1.png"),
          title: "按摩能缓解酒后头晕头痛？",
          resume: "喝醉酒之后，如何缓解头痛、头晕、反胃等相关问题。",
          look: 681234
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.today {
  margin: 5px auto;
  width: 90%;
  // height: 140px;
  border-radius: 10px;
  z-index: -1;
  box-shadow: 0px 0px 1px #808080;

  // background: yellow;
  .header {
    width: 100%;
    height: 25px;
    line-height: 25px;

    .title {
      float: left;
      display: block;
      margin-left: 5px;
      font-weight: bold;
      font-size: 15px;
    }

    .more {
      float: right;
      font-size: 13px;
    }
  }

  .conter {
    // width: 100%;
    height: 100px;
    padding-bottom: 5px;
    text-align: left;

    // border-1px(rgba(7, 17, 27, 0.1));

    // border-bottom: 0.1px solid #7e8c8d;
    .conter-left {
      float: left;
      // margin: 5px;
      margin-left: 5px;
      width: 25%;
      height: 90%;

      // height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .conter-right {
      float: right;
      width: 70%;

      .right-title {
        display: block;
        margin-top: 2px;
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 17px;
      }

      .resume {
        font-size: 13px;
        color: #7e8c8d;
        // letter-spacing: 5px;
        line-height: 1.5;
      }

      .look {
        float: right;
        display: block;
        margin-top: 12px;
        margin-right: 5px;
        font-size: 12px;
        color: #7e8c8d;

        .icon {
          font-weight: bold;
          font-size: 14px;
        }
      }
    }
  }
}
</style>