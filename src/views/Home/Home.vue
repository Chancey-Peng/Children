<template>
  <div class="home">
    <!-- <Search></Search> -->
    <NavBar></NavBar>
  </div>
</template>
<script>
import Search from "../../components/Search/Search.vue";
import NavBar from "../../components/NavBar/NavBar.vue";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Search,
    NavBar
  }
};
</script>
<style lang="stylus" scoped>
.home {
  // background: blue;
}
</style>