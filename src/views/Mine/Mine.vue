<template>
  <div class="mine">
    <div class="nav">
      <i class="icon iconfont icon-saoma"></i>
      <span class="username">Chancey</span>
      <i class="icon iconfont icon-tixing"></i>
    </div>
    <div class="conter-wrapper">
      <div class="header">
        <div class="desc">
          <div class="text">
            <div class="banner">
              <span class="count">123</span>预约
            </div>
            <div class="banner">
              <span lass="count">122</span>咨询
            </div>
            <div class="banner">
              <span lass="count">122</span>就诊
            </div>
          </div>
        </div>
        <div class="avator">
          <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt />
        </div>
      </div>
      <div class="function">
        <ul>
          <li class="list"></li>
        </ul>
      </div>
    </div>
    <div class="background">
      <img src="https://img.yzcdn.cn/vant/apple-1.jpg" width="100%" height="100%" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Mine",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="stylus" scoped>
.mine {
  .nav {
    padding: 10px 0;
    width: 100%;
    height: 30px;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    font-size: 0;
    border-radius: 0 0 30px 30px;
    background: rgba(0, 0, 0, 0.1);

    .icon-saoma {
      margin: 5px 10px;
      float: left;
      font-size: 20px;
    }

    .username {
      margin: 5px 0;
      font-size: 20px;
    }

    .icon-tixing {
      margin: 5px 10px;
      float: right;
      font-size: 20px;
    }
  }

  .conter-wrapper {
    margin: 100px auto;
    width: 90%;

    .header {
      // margin: 100px auto;
      .desc {
        position: relative;
        width: 100%;
        height: 150px;
        border-radius: 10px;
        box-shadow: 0px 0px 1px #808080;
        background: #fff;

        .text {
          position: absolute;
          bottom: 10px;
          text-align: center;
          width: 100%;
          height: 50px;
          line-height: 50px;

          .banner {
            float: left;
            position: relative;
            width: 33%;
            font-size: 18px;
            font-weight: 500;

            span {
              position: absolute;
              top: -25px;
              width: 20px;
              color: #07c160;
            }
          }
        }
      }

      .avator {
        position: absolute;
        top: 100px;
        left: 140px;
        width: 100px;
        height: 100px;
        border-radius: 50%;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
    }

    .function {
      margin: 20px auto;
      width: 100%;
      height: 240px;
    }
  }

  .background {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 30%;
    z-index: -1;
    filter: blur(5px);
  }
}
</style>