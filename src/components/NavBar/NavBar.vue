<template>
  <div class="nav">
    <!-- <span class="icon iconfont icon-dingwei"></span> -->
    <!-- <van-icon name="search" slot="right" /> -->
    <div class="conter">
      <van-icon class="dingwei icon iconfont icon-dingwei" />
      <span class="msgloaction">广东东软学院体育馆</span>
      <van-icon name="arrow-down" />
    </div>
    <Search></Search>
  </div>
</template>
<script>
import Search from "../Search/Search.vue";
export default {
  name: "NavBar",
  data() {
    return {};
  },
  components: {
    Search
  }
};
</script>
<style lang="stylus" scoped>
.nav {
  // position: absolute;
  // width: 100%;
  // height: 54px;
  // z-index: 1;
  // background: rgb(255, 255, 255);
  .conter {
    float: left;
  }

  // background: #07c160;
  .dingwei {
    line-height: 54px;
    font-size: 20px;
  }

  .msgloaction {
    width: 103px;
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