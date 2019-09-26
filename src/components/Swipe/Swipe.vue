<template>
  <van-swipe :autoplay="3000" class="swipe" indicator-color="white">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <!-- <img v-lazy="image" /> -->
      <img :src="image" alt />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
export default {
  name: "Swipe",
  data() {
    return {
      images: [
        "https://n2.hdfimg.com/g3/M02/C8/A1/v4YBAF2IOYaAQ9HzAAC6ra0Su6c112.jpg",
        "https://n3.hdfimg.com/g3/M02/C8/A1/xYYBAF2IOYeAelBNAANn7DKYE-A240.png",
        "https://n4.hdfimg.com/g3/M02/C8/A1/v4YBAF2IOYiAGw0dAAEk6uJBcAo748.jpg",
        "https://n1.hdfimg.com/g2/M02/BC/78/yIYBAF2J23mASTdXAADZ2dYqFj0109.jpg"
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
  margin: 15px auto;
  // background: #07c160;
  border-radius: 10px;
  z-index: -1;

  img {
    width: 100%;
    height: 120px;
  }
}
</style>