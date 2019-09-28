<template>
  <div class="nav">
    <nav-location></nav-location>
    <Search></Search>
  </div>
</template>
<script>
import Search from "../Search/Search.vue";
import NavLocation from "../Location/NavLocation.vue";
export default {
  name: "NavBar",
  data() {
    return {};
  },
  components: {
    Search,
    NavLocation
  }
};
</script>
<style lang="stylus" scoped>
.nav {
  width: 100%;
}
</style>