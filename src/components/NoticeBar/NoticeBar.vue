<template>
  <div class="noticebar">
    <van-notice-bar
      color="#ff0000"
      background="#fff"
      left-icon="icon iconfont icon-tongzhi"
      mode="link"
      class="bar"
    >代码辣鸡非我意，自己动手分田地，你若气死谁如意？谈笑风生活长命。</van-notice-bar>
  </div>
</template>
<script>
export default {
  name: "NoticeBar",
  data() {
    return {};
  }
};
</script>
<style lang="stylus" scoped>
.noticebar {
  margin: 0px auto;
  width: 90%;

  .bar {
    padding: 0px 5px;
  }
}
</style>