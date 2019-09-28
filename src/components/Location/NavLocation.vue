<template>
  <div class="nav">
    <div class="conter">
      <van-icon class="dingwei icon iconfont icon-dingwei" />
      <span class="msgloaction">广东东软学院体育馆</span>
      <van-icon name="arrow-down" />
    </div>
  </div>
</template>
<script>
export default {
  name: "NavLocation",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="stylus" scoped>
.nav {
  .conter {
    float: left;
    background: rgb(255, 255, 255);
  }

  .dingwei {
    line-height: 54px;
    font-size: 20px;
  }

  .msgloaction {
    width: 104px;
    margin: 0;
    padding: 0;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 15px;
  }
}
</style>