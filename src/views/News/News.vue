<template>
  <div class="sort">
    <div class="navbar" :class="{NavBarFixed:isFixed}">
      <van-search
        class="search"
        v-model="value"
        placeholder="搜索"
        shape="round"
        show-action
        input-align="center"
      >
        <div slot="action">
          <van-icon class="guowuche" name="cart-o" />
        </div>
      </van-search>
    </div>
    <div class="conter">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li
            class="menu-item"
            v-for="(item,index) in sortlist"
            :key="index"
            :class="{'current':currentIndex===index}"
            @click="selectMenu(index,$event)"
          >
            <span class="text">{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="conter-wrapper" ref="conterWrapper">
        <ul>
          <li
            class="conter-list list-hook"
            ref="conterList"
            v-for="item in sortlist"
            :key="item.type"
          >
            <div class="imgurl">
              <img :src="item.imgurl" alt />
            </div>
            <ul>
              <li v-for="(item,index) in item.conter" :key="index">
                <div class="title">{{item.name}}</div>
                <ul>
                  <li class="desc" v-for="(item,index) in item.text" :key="index">
                    <div class="radius"></div>
                    <p class="text">{{item.one}}</p>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "New",
  data() {
    return {
      isFixed: false,
      value: "",
      listHeight: [],
      scrollY: 0,
      sortlist: [
        {
          name: "全科",
          type: 0,
          imgurl: "https://img.yzcdn.cn/vant/apple-1.jpg",
          conter: [
            {
              name: "全村人民的希望"
            }
          ]
        },
        {
          name: "外科",
          type: 1,
          imgurl: "https://img.yzcdn.cn/vant/apple-2.jpg",
          conter: [
            {
              name: "普外科",
              text: [
                { one: "慢性阑尾炎" },
                { one: "腹股沟斜疝" },
                { one: "肠道息肉病" },
                { one: "菌血症" },
                { one: "淋巴结炎" },
                { one: "粘连性肠梗阻" },
                { one: "脾破裂" },
                { one: "腹股沟直疝" },
                { one: "切口疝" },
                { one: "会阴疝" }
              ]
            },
            {
              name: "心胸外科",
              text: [
                { one: "急性心肌梗死" },
                { one: "肋骨骨折" },
                { one: "胸腺瘤" },
                { one: "食管裂孔疝" },
                { one: "漏斗胸" },
                { one: "猝死" },
                { one: "二尖瓣关闭不全" },
                { one: "主动脉夹层" },
                { one: "自发性气胸" },
                { one: "急性心力衰竭" }
              ]
            },
            {
              name: "肝胆外科",
              text: [
                { one: "胆囊息肉" },
                { one: "胆囊炎" },
                { one: "胆囊结石" },
                { one: "慢性肝炎" },
                { one: "肝损伤" },
                { one: "肝胆管结石" },
                { one: "肝硬化男性性功能减弱综合征" },
                { one: "肝炎后肝硬化" },
                { one: "结石性胆囊炎" },
                { one: "老年人胆囊炎" }
              ]
            },
            {
              name: "胃肠外科",
              text: [
                { one: "胃溃疡" },
                { one: "急性阑尾炎" },
                { one: "胃肠神经官能症" },
                { one: "胃食管反流病" },
                { one: "肠系膜淋巴结炎" },
                { one: "肠套叠" },
                { one: "胃穿孔" },
                { one: "脐疝" },
                { one: "胃溃疡出血" },
                { one: "食管息肉" }
              ]
            },
            {
              name: "脑外科",
              text: [
                { one: "脑出血" },
                { one: "脑膜炎" },
                { one: "蛛网膜下腔出血" },
                { one: "脑震荡" },
                { one: "脑积水" },
                { one: "烟雾病" },
                { one: "脑血栓形成" },
                { one: "表皮囊肿" },
                { one: "高血压脑出血" },
                { one: "高血压性脑出血" }
              ]
            },
            {
              name: "泌尿外科",
              text: [
                { one: "肾结石" },
                { one: "尿路感染" },
                { one: "前列腺增生" },
                { one: "尿道结石" },
                { one: "良性前列腺增生" },
                { one: "鞘膜积液" },
                { one: "膀胱结石" },
                { one: "尿失禁" },
                { one: "前列腺结石" },
                { one: "肾错构瘤" }
              ]
            },
            {
              name: "骨科",
              text: [
                { one: "腰椎间盘突出" },
                { one: "肩周炎" },
                { one: "股骨头坏死" },
                { one: "骨质增生" },
                { one: "骨质疏松" },
                { one: "半月板损伤" },
                { one: "腱鞘炎" },
                { one: "佝偻病" },
                { one: "鼠标手" },
                { one: "骨折" }
              ]
            },
            {
              name: "肛肠外科",
              text: [
                { one: "痔疮" },
                { one: "肛裂" },
                { one: "肛瘘" },
                { one: "直肠息肉" },
                { one: "肛周脓肿" },
                { one: "外痔" },
                { one: "结肠息肉" },
                { one: "内痔" },
                { one: "直肠脱垂" },
                { one: "肛窦炎" }
              ]
            },
            {
              name: "乳腺外科",
              text: [
                { one: "乳腺增生" },
                { one: "乳头内陷" },
                { one: "乳房纤维瘤" },
                { one: "急性乳腺炎" },
                { one: "乳腺囊性增生症" },
                { one: "男子乳房发育症" },
                { one: "乳腺纤维腺瘤" },
                { one: "乳房纤维腺瘤" },
                { one: "乳腺囊性增生病" },
                { one: "乳腺结核" }
              ]
            },
            {
              name: "血管外科",
              text: [
                { one: "科血管瘤" },
                { one: "下肢静脉曲张" },
                { one: "下肢深静脉血栓形成" },
                { one: "脉管炎" },
                { one: "血管炎" },
                { one: "血栓闭塞性脉管炎" },
                { one: "下肢动脉硬化闭塞症" },
                { one: "下肢静脉血栓" },
                { one: "静脉血栓形成" },
                { one: "动脉瘤" }
              ]
            },
            {
              name: "器官移植",
              text: [
                { one: "断指再植" },
                { one: "断肢再植" },
                { one: "肠道息肉病" },
                { one: "菌血症" },
                { one: "淋巴结炎" },
                { one: "粘连性肠梗阻" },
                { one: "脾破裂" },
                { one: "腹股沟直疝" },
                { one: "切口疝" },
                { one: "会阴疝" }
              ]
            },
            {
              name: "烧伤科",
              text: [
                { one: "烧伤" },
                { one: "冻伤" },
                { one: "触电" },
                { one: "小儿烫伤" },
                { one: "电烧伤" },
                { one: "烧伤感染" },
                { one: "化学烧伤" },
                { one: "小儿烧伤" },
                { one: "烧伤后心功能障碍" },
                { one: "吸入性损伤" }
              ]
            },
            {
              name: "手外科",
              text: [
                { one: "手部神经损伤" },
                { one: "开放性手外伤" },
                { one: "拇指掌指关节尺侧侧副韧带损伤" },
                { one: "手部屈指肌腱损伤" },
                { one: "贝壳甲综合征" },
                { one: "手部血管损伤" },
                { one: "掌侧化脓性腱鞘炎" },
                { one: "滑囊炎和深间隙感染" },
                { one: "月骨脱位及月骨周围脱位" }
              ]
            },
            {
              name: "外伤科",
              text: [
                { one: "腰肌劳损" },
                { one: "破伤风" },
                { one: "跟腱炎" },
                { one: "头外伤" },
                { one: "钝挫伤" },
                { one: "颈部脊髓损伤" },
                { one: "化脓性指头炎" },
                { one: "棘间韧带损伤" },
                { one: "腹部创伤" },
                { one: "异物伤" }
              ]
            },
            {
              name: "检查",
              text: [
                { one: "BMI指数" },
                { one: "闭眼单脚站立" },
                { one: "眼底检查" },
                { one: "新生儿疾病筛查" },
                { one: "视力" },
                { one: "检眼镜检查法" },
                { one: "胃钡餐造影 职业病检查项目" },
                { one: "外科检查 胎儿体重预测" }
              ]
            },
            {
              name: "手术",
              text: [
                { one: "颈部淋巴结切除术" },
                { one: "皮脂腺囊肿切除术" },
                { one: "止血带止血术" },
                { one: "气管插管术" },
                { one: "鸡眼切除术" },
                { one: "脂肪瘤切除术" },
                { one: "气管切开术" },
                { one: "腋臭手术" },
                { one: "冷冻手术" },
                { one: "压迫止血" }
              ]
            }
          ]
        },
        {
          name: "内科",
          type: 2,
          imgurl: "https://img.yzcdn.cn/vant/apple-1.jpg"
        },
        {
          name: "中医科",
          type: 3,
          imgurl: "https://img.yzcdn.cn/vant/apple-2.jpg"
        },
        {
          name: "肿瘤科",
          type: 4,
          imgurl: "https://img.yzcdn.cn/vant/apple-2.jpg"
        },
        {
          name: "精神科",
          type: 5,
          imgurl: "https://img.yzcdn.cn/vant/apple-1.jpg"
        },
        {
          name: "皮肤科",
          type: 6,
          imgurl: "https://img.yzcdn.cn/vant/apple-2.jpg"
        },
        {
          name: "药剂科",
          type: 7,
          imgurl: "https://img.yzcdn.cn/vant/apple-2.jpg"
        },
        {
          name: "男科",
          type: 8,
          imgurl: "https://img.yzcdn.cn/vant/apple-2.jpg"
        },
        {
          name: "妇科",
          type: 9,
          imgurl: "https://img.yzcdn.cn/vant/apple-2.jpg"
        },
        {
          name: "儿科",
          type: 10,
          imgurl: "https://img.yzcdn.cn/vant/apple-2.jpg"
        },
        {
          name: "麻醉科",
          type: 11,
          imgurl: "https://img.yzcdn.cn/vant/apple-2.jpg"
        },
        {
          name: "妇产科",
          type: 12,
          imgurl: "https://img.yzcdn.cn/vant/apple-2.jpg"
        },
        {
          name: "急诊科",
          type: 13,
          imgurl: "https://img.yzcdn.cn/vant/apple-2.jpg"
        },
        {
          name: "传染科",
          type: 14,
          imgurl: "https://img.yzcdn.cn/vant/apple-2.jpg"
        },
        {
          name: "影像科",
          type: 15,
          imgurl: "https://img.yzcdn.cn/vant/apple-2.jpg"
        },
        {
          name: "美容减肥科",
          type: 16,
          imgurl: "https://img.yzcdn.cn/vant/apple-2.jpg"
        }
      ]
    };
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    }
  },
  created() {
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var offsetTop = document.querySelector(".navbar").offsetTop;
      if (scrollTop > offsetTop) {
        this.isFixed = true;
      } else {
        this.isFixed - false;
      }
    },
    selectMenu(index, event) {
      // console.log(index);
      if (!event._constructed) {
        return;
      }
      // let conterList = this.$refs.conterWrapper.getElementsByClassName(
      //   "list-hook"
      // );
      let conterList = this.$refs.conterList;
      let el = conterList[index];
      this.conterScroll.scrollToElement(el, 300);
    },
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      });
      this.conterScroll = new BScroll(this.$refs.conterWrapper, {
        probeType: 3
      });
      this.conterScroll.on("scroll", pos => {
        if (pos.y <= 0) {
          this.scrollY = Math.abs(Math.round(pos.y));
        }
      });
    },
    _calculateHeight() {
      // let conterList = this.$refs.conterWrapper.getElementsByClassName(
      //   "list-hook"
      // );
      let conterList = this.$refs.conterList;
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < conterList.length; i++) {
        let item = conterList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="stylus" scoped>
.sort {
  .navbar {
    position: fixed;
    width: 100%;
    // top: 0px;
    // position: absolute;
    z-index: 2;

    .guowuche {
      font-size: 20px;
    }
  }

  .conter {
    padding-top: 54px;
    display: flex;
    position: absolute;
    top: 0px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;

    .menu-wrapper {
      flex: 0 0 125px;
      width: 125px;
      height: auto;
      overflow-y: auto;
      overflow: hidden;
      text-align: center;
      background-color: #fafafa;

      .menu-item {
        display: table;
        width: 126px;
        height: 44px;
        line-height: 44px;

        &.current {
          position: relative;
          z-index: 10;
          background-color: #fff;
          border-color: #07c160;
          font-size: 18px;
          font-weight: bold;
        }

        .text {
          display: table-cell;
          // width: 56px;
          vertical-align: middle;
          font-size: 16px;
          color: #323233;
        }
      }
    }

    .conter-wrapper {
      flex: 1;

      .imgurl {
        padding: 10px 20px;
        height: 80px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .title {
        margin-left: 10px;
        font-size: 14px;
        font-weight: bold;
        text-align: left;
      }

      .desc {
        float: left;
        text-align: center;
        width: 50%;
        height: 50%;
        cursor: pointer;

        .radius {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: yellow;
        }

        .text {
          font-size: 12px;
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }

  .NavBarFixed {
    position: fixed;
    width: 100%;
    top: 0px;
    z-index: 2;
  }
}
</style>