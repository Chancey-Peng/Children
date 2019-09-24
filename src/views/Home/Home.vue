<template>
  <div class="home">
    <div class="navbar" :class="{NavBarFixed:isFixed}">
      <NavBar></NavBar>
    </div>
    <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"></van-pull-refresh> -->
    <swipe></swipe>
    <h1>1245646546546515</h1>
    <h1>1245646546546515</h1>
    <h1>1245646546546515</h1>
    <h1>1245646546546515</h1>
    <h1>1245646546546515</h1>
    <h1>1245646546546515</h1>
    <h1>1245646546546515</h1>
    <h1>1245646546546515</h1>
    <h1>1245646546546515</h1>
    <h1>1245646546546515</h1>
    <h1>1245646546546515</h1>
    <h1>1245646546546515</h1>
    <h1>1245646546546515</h1>
    <h1>1245646546546515</h1>
    <h1>1245646546546515</h1>
    <h1>1245646546546515</h1>
    <h1>1245646546546515</h1>
  </div>
</template>
<script>
// import Search from "../../components/Search/Search.vue";
import NavBar from "../../components/NavBar/NavBar.vue";
import Swipe from "../../components/Swipe/Swipe.vue";
export default {
  name: "Home",
  data() {
    return {
      isFixed: false
      // isLoading: false
    };
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var offsetTop = document.querySelector(".navbar").offsetTop;
      console.log(scrollTop);
      console.log(offsetTop);
      if (scrollTop > offsetTop) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    }
    // onRefresh() {
    //   setTimeout(() => {
    //     this.$toast("刷新成功");
    //     this.isLoading = false;
    //   }, 500);
    // }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  components: {
    NavBar,
    Swipe
  }
};
</script>
<style lang="stylus" scoped>
.home {
  // background: blue;
  padding-bottom: 50px;

  // padding: 0px 40px 56px 56px;
  .navbar {
    // position: absolute;
    // top: 0px;
    // z-index: 1;
    background: rgb(255, 255, 255);
  }

  .NavBarFixed {
    position: fixed;
    top: 0px;
  }
}
</style>