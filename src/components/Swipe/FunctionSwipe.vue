<template>
  <div class="functionswipe">
    <div class="subscribe">
      <div class="desc">
        <p class="title">预约挂号</p>
        <p class="details">预约不排队</p>
      </div>
      <img src=".././../assets/images/function/subscribe.png" alt />
    </div>
    <div class="conter">
      <div class="hospital">
        <div class="desc">
          <p class="title">找医院</p>
          <p class="details">医院在线开门</p>
        </div>
        <img src=".././../assets/images/function/hospital.png" alt />
      </div>
      <div class="doctor">
        <div class="desc">
          <p class="title">找名医</p>
          <p class="details">名医大咖看病</p>
        </div>
        <img src=".././../assets/images/function/doctor.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FunctionSwipe",
  data() {
    return {};
  }
};
</script>
<style lang="stylus" scoped>
.functionswipe {
  display: flex;
  margin: 5px auto;
  width: 90%;
  height: 100px;

  // border-radius: 10px;

  // z-index: -1;
  // box-shadow: 0px 0px 1px #808080;
  // border: 1px solid #808080;
  .desc {
    float: left;
    width: 50%;
    text-align: center;
  }

  img {
    float: right;
    width: 50%;
    height: 100%;
  }

  p {
    // float: left;
    display: block;
  }

  .title {
    display: block;
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #07c160;
  }

  .details {
    display: block;
    margin-top: 3px;
    font-size: 13px;
    color: #7e8c8d;
  }

  .subscribe {
    width: 50%;
    height: 100px;

    // background: #f3f5f7;
    // border: 1px solid #7e8c8d;
    .desc {
      margin-top: 20px;
    }
  }

  .conter {
    width: 50%;

    .hospital {
      width: 100%;
      height: 50px;
      // background: blue;
      // border: 1px solid #808080;
    }

    .doctor {
      width: 100%;
      height: 50px;
      // background: yellow;
      // border: 1px solid #808080;
    }
  }
}
</style>