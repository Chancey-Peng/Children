<template>
  <div class="index">
    <Propaganda></Propaganda>
    <Activity></Activity>
  </div>
</template>
<script>
import Propaganda from "../Area/Propaganda.vue";
import Activity from "../Area/Activity.vue";
export default {
  name: "index",
  data() {
    return {};
  },
  components: {
    Propaganda,
    Activity
  }
};
</script>
<style lang="stylus" scoped>
.index {
}
</style>