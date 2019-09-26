<template>
  <div class="listswipe">
    <ul>
      <li class="icons" v-for="(item,key) in imglist" :key="key">
        <a>
          <img :src="item.imgurl" alt />
          <p>{{item.name}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "ListSwipe",
  data() {
    return {
      imglist: [
        {
          type: 0,
          name: "急诊科",
          imgurl: require(".././../assets/images/department/emergency.png")
        },
        {
          type: 1,
          name: "外科",
          imgurl: require(".././../assets/images/department/surgery.png")
        },
        {
          type: 2,
          name: "精神科",
          imgurl: require(".././../assets/images/department/psychiatry.png")
        },
        {
          type: 3,
          name: "中医科",
          imgurl: require(".././../assets/images/department/ChineseMedicine.png")
        },
        {
          type: 4,
          name: "皮肤科",
          imgurl: require(".././../assets/images/department/skin.png")
        },
        {
          type: 5,
          name: "内科",
          imgurl: require(".././../assets/images/department/internal.png")
        },
        {
          type: 6,
          name: "儿科",
          imgurl: require(".././../assets/images/department/pediatrics.png")
        },
        {
          type: 7,
          name: "妇科",
          imgurl: require(".././../assets/images/department/gynaecology.png")
        },
        {
          type: 8,
          name: "男科",
          imgurl: require(".././../assets/images/department/andrology.png")
        },
        {
          type: 9,
          name: "全部分类",
          imgurl: require(".././../assets/images/department/classification.png")
        }
      ]
    };
  },
  methods: {},
  components: {}
};
</script>
<style lang="stylus" scoped>
// @import '../../../../../common/icons/stylus/department.styl';
.listswipe {
  margin: 20px auto;
  width: 90%;
  height: 140px;
  border-radius: 10px;
  z-index: -1;
  box-shadow: 0px 0px 1px #808080;

  .icons {
    float: left;
    text-align: center;
    width: 20%;
    height: 70px;
    cursor: pointer;

    p {
      padding-top: 2px;
      font-size: 12px;
    }

    img {
      padding-top: 10px;
      width: 50%;
      height: 50%;
    }

    // line-height: 50px;

    // background: yellow;
    .iconfont {
      font-size: 45px;
      margin: 2px;
    }
  }
}
</style>