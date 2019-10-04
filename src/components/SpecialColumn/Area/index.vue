<template>
  <div class="index">
    <Propaganda></Propaganda>
    <Activity></Activity>
    <project></project>
  </div>
</template>
<script>
import Propaganda from "./Propaganda.vue";
import Activity from "./Activity.vue";
import Project from "./Project.vue";
export default {
  name: "index",
  data() {
    return {};
  },
  components: {
    Propaganda,
    Activity,
    Project
  }
};
</script>
<style lang="stylus" scoped>
.index {
}
</style>