<template>
  <div class="activity">
    <div class="header">
      <span class="title border-block">活动专区</span>
      <router-link to="/">
        <div class="more">
          <span class="left">更多</span>
        </div>
      </router-link>
    </div>
    <div class="conter">
      <!-- <div class="conter-top">
        <img src="../../../assets/images/activity/20191003194558.png" alt />
        <p class="desc">分享你不知道的急救常识</p>
        <img src="../../../assets/images/activity/20191003194631.png" alt />
        <p class="desc">健康自测，购买优惠卷免费领！</p>
      </div>
      <div class="conter-bottom">
        <img src="../../../assets/images/activity/20191003194657.png" alt />
        <p class="desc">UI设计是训练营开启啦！快来加入我们吧</p>
        <img src="../../../assets/images/activity/20191003194721.png" alt />
        <p class="desc">关爱女性，医院体检0花费</p>
      </div>-->
      <ul>
        <li class="details" v-for="(item,index) in activitylist" :key="index">
          <router-link to="/">
            <img :src="item.imgurl" alt />
            <p class="desc">{{item.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Activity",
  data() {
    return {
      activitylist: [
        {
          id: 0,
          title: "分享你不知道的急救常识",
          imgurl: require("../../../assets/images/activity/20191003194558.png")
        },
        {
          id: 1,
          title: "健康自测，购买优惠卷免费领！",
          imgurl: require("../../../assets/images/activity/20191003194631.png")
        },
        {
          id: 2,
          title: "UI设计是训练营开启啦！快来加入我们吧",
          imgurl: require("../../../assets/images/activity/20191003194657.png")
        },
        {
          id: 3,
          title: "关爱女性，医院体检0花费",
          imgurl: require("../../../assets/images/activity/20191003194721.png")
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.activity {
  margin: 20px auto;
  width: 90%;
  height: 270px;
  border-bottom: 1px solid #7e8c8d;

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
    width: 100%;
    height: 150px;

    .details {
      float: left;
      width: 47%;
      height: 100%;
      margin-top: 5px;
      padding-right: 10px;

      .desc {
        margin-top: 5px;
        font-size: 12px;
        text-align: left;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>