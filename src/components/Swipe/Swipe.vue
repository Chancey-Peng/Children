<template>
  <van-swipe :autoplay="3000" class="swipe" indicator-color="white">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
export default {
  name: "Swipe",
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },
  components: {}
};
</script>
<style lang="stylus" scoped>
.swipe {
  width: 90%;
  height: 120px;
  margin: 0px auto;
  background: #07c160;
  border-radius: 10px;
  z-index: -1;
}
</style>