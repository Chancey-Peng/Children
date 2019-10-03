<template>
  <div class="propaganda">
    <div class="header">
      <span class="title border-block">宣传专区</span>
      <router-link to="/">
        <div class="more">
          <span class="left">更多</span>
        </div>
      </router-link>
    </div>
    <div class="conter">
      <div class="conter-top">
        <img src="../../../assets/images/propaganda/20191003182106.png" alt />
        <p class="desc">越累越胖？你是否已经陷入“过劳肥”怪圈！</p>
      </div>
      <div class="conter-left">
        <img src="../../../assets/images/propaganda/20191003182117.png" alt />
        <p class="desc">关于医疗未来的科普大全</p>
      </div>
      <div class="conter-right">
        <img src="../../../assets/images/propaganda/20191003182132.png" alt />
        <p class="desc">风湿痛的症状及治疗方法</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Propaganda",
  data() {
    return {};
  }
};
</script>
<style lang="stylus" scoped>
.propaganda {
  margin: 20px auto;
  width: 90%;
  height: 250px;
  border-bottom: 1px solid #7e8c8d;

  .desc {
    margin-top: 5px;
    font-size: 14px;
    text-align: left;
  }

  .header {
    width: 100%;
    height: 25px;
    line-height: 25px;

    .title {
      float: left;
      display: block;
      margin-left: 5px;
      // border-left: 5px solid #ff0000;
      font-weight: bold;
      font-size: 15px;
    }

    .more {
      float: right;
      font-size: 13px;
    }
  }

  .conter {
    margin-top: 10px;

    .conter-top {
      width: 100%;

      img {
        width: 100%;
        height: 60%;
      }
    }

    .conter-left {
      margin-top: 10px;
      // margin-right: 5px;
      float: left;
      width: 50%;

      img {
        width: 90%;
        height: 90%;
      }
    }

    .conter-right {
      margin-top: 10px;
      // margin-left: 5px;
      float: right;
      width: 50%;

      img {
        width: 90%;
        height: 90%;
      }
    }
  }
}
</style>