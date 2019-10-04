<template>
  <div class="project">
    <div class="header">
      <span class="title border-block">项目专区</span>
      <router-link to="/">
        <div class="more">
          <span class="left">更多</span>
        </div>
      </router-link>
    </div>
    <div class="pics">
      <div class="pic-wrapper" ref="picWrapper">
        <ul class="pic-list" ref="picList">
          <li class="pic-item" v-for="(pic,index) in picsList" :key="index">
            <img :src="pic.imgurl" alt width="120" height="90" />
            <p class="desc">{{pic.title}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "Project",
  data() {
    return {
      picsList: [
        {
          id: 0,
          title: "数据可视化",
          imgurl: require("../../../assets/images/project/20191003194039.png")
        },
        {
          id: 1,
          title: "项目图标整理",
          imgurl: require("../../../assets/images/project/20191003194229.png")
        },
        {
          id: 2,
          title: "2016项目总结",
          imgurl: require("../../../assets/images/project/20191003194258.png")
        },
        {
          id: 3,
          title: "数据可视化",
          imgurl: require("../../../assets/images/project/20191003194039.png")
        },
        {
          id: 4,
          title: "项目图标整理",
          imgurl: require("../../../assets/images/project/20191003194229.png")
        },
        {
          id: 5,
          title: "2016项目总结",
          imgurl: require("../../../assets/images/project/20191003194258.png")
        }
      ]
    };
  },
  watch: {},
  mounted() {
    this.$nextTick(() => {
      this._initPics();
    });
  },
  methods: {
    _initPics() {
      if (this.picsList) {
        let picWidth = 120;
        let margin = 6;
        let width = (picWidth + margin) * this.picsList.length - margin;
        this.$refs.picList.style.width = width + "px";
        this.$nextTick(() => {
          if (!this.picScroll) {
            this.picScroll = new BScroll(this.$refs.picWrapper, {
              scrollX: true,
              eventPassthrough: "vertical"
            });
          } else {
            this.picScroll.refresh();
          }
        });
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.project {
  margin: 20px auto;
  width: 90%;
  height: 100%;

  // border-bottom: 1px solid #7e8c8d;
  .header {
    width: 100%;
    height: 25px;
    line-height: 25px;

    .title {
      float: left;
      display: block;
      margin-left: 5px;
      font-weight: bold;
      font-size: 15px;
    }

    .more {
      float: right;
      font-size: 13px;
    }
  }

  .pics {
    padding: 9px;

    .pic-wrapper {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;

      .pic-list {
        font-size: 0px;

        .pic-item {
          display: inline-block;
          // float: left;
          margin-right: 6px;
          width: 120px;
          height: 90px;

          &:last-child {
            margin: 0px;
          }

          .desc {
            margin-top: 5px;
            font-size: 12px;
            text-align: left;
          }
        }
      }
    }
  }
}
</style>