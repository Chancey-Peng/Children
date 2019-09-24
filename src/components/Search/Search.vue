<template>
  <van-search
    class="search"
    v-model="value"
    placeholder="请输入搜索关键词"
    shape="round"
    show-action
    input-align="center"
  >
    <div slot="action">
      <!-- <span class="icon iconfont icon-xiaoxi"></span> -->
      <van-icon class="xiaoxi" name="envelop-o" dot />
    </div>
  </van-search>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      value: ""
    };
  }
};
</script>
<style lang="stylus" scoped>
.search {
  float: right;
  width: 60%;

  .xiaoxi {
    font-size: 20px;
  }
}</style>