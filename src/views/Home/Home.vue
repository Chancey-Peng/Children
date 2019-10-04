<template>
  <div class="home">
    <div class="navbar" :class="{NavBarFixed:isFixed}">
      <NavBar></NavBar>
    </div>
    <div class="conter">
      <van-pull-refresh
        v-model="isLoading"
        @refresh="onRefresh"
        loosing-text="已显示最新内容"
        loading-text="努力加载中.."
        success-text="已显示最新内容"
      >
        <swipe></swipe>
        <list-swipe></list-swipe>
        <function-swipe></function-swipe>
        <notice-bar></notice-bar>
        <today></today>
        <!-- <Propaganda></Propaganda> -->
        <index></index>
        <base-line></base-line>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
// import Search from "../../components/Search/Search.vue";
import NavBar from "../../components/NavBar/NavBar.vue";
import Swipe from "../../components/Swipe/Swipe.vue";
import ListSwipe from "../../components/Swipe/ListSwiper.vue";
import FunctionSwipe from "../../components/Swipe/FunctionSwipe.vue";
import NoticeBar from "../../components/NoticeBar/NoticeBar.vue";
import Today from "../../components/SpecialColumn/Today.vue";
import Propaganda from "../../components/SpecialColumn/Area/Propaganda.vue";
import index from "../../components/SpecialColumn/Area/index.vue";
import BaseLine from "../../components/BaseLine/BaseLine.vue";
export default {
  name: "Home",
  data() {
    return {
      isFixed: false,
      isLoading: false
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
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("加载成功");
        this.isLoading = false;
      }, 500);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  components: {
    NavBar,
    Swipe,
    ListSwipe,
    FunctionSwipe,
    NoticeBar,
    Today,
    Propaganda,
    index,
    BaseLine
  }
};
</script>
<style lang="stylus" scoped>
.home {
  // background: #f3f5f7;
  padding-bottom: 50px;

  // padding: 0px 40px 56px 56px;
  .navbar {
    background: rgb(255, 255, 255);
  }

  .conter {
    padding-top: 54px;
    text-align: center;
  }

  .NavBarFixed {
    position: fixed;
    width: 100%;
    top: 0px;
    z-index: 2;
  }
}
</style>