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
      <van-tree-select
        class="tree-wrapper"
        height="auto"
        :items="items"
        :main-active-index.sync="activeIndex"
      >
        <template slot="content">
          <div v-for="(item,index) in conterList" :key="index">
            <div class="sort-wrapper" ref="conterWrapper" v-if="activeIndex === index">
              <div class="imgurl">
                <img :src="item.bannerurl" alt />
              </div>
              <div class="title">{{item.text}}</div>
              <div class="sortWrapper">
                <ul>
                  <li class="icons" v-for="(item,key) in item.keshi" :key="key">
                    <a>
                      <img :src="item.imgurl" alt />
                      <p>{{item.name}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- <van-image v-if="activeIndex === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
          <van-image v-if="activeIndex === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          <van-image v-if="activeIndex === 2" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          <van-image v-if="activeIndex === 3" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          <van-image v-if="activeIndex === 4" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          <van-image v-if="activeIndex === 5" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          <van-image v-if="activeIndex === 6" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          <van-image v-if="activeIndex === 7" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          <van-image v-if="activeIndex === 8" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          <van-image v-if="activeIndex === 9" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          <van-image v-if="activeIndex === 10" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          <van-image v-if="activeIndex === 11" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          <van-image v-if="activeIndex === 12" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          <van-image v-if="activeIndex === 13" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          <van-image v-if="activeIndex === 14" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          <van-image v-if="activeIndex === 15" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          <van-image v-if="activeIndex === 16" src="https://img.yzcdn.cn/vant/apple-2.jpg" />-->
        </template>
      </van-tree-select>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
// import Search from "../../components/Search/Search.vue";
export default {
  name: "Sort",
  data() {
    return {
      isFixed: false,
      value: "",
      activeIndex: 0,
      items: [
        { text: "全科" },
        { text: "外科" },
        { text: "内科" },
        { text: "中医科" },
        { text: "肿瘤科" },
        { text: "精神科" },
        { text: "皮肤科" },
        { text: "药剂科" },
        { text: "男科" },
        { text: "妇科" },
        { text: "儿科" },
        { text: "麻醉科" },
        { text: "妇产科" },
        { text: "急诊科" },
        { text: "传染科" },
        { text: "影像科" },
        { text: "五官科" }
      ],
      conterList: [
        {
          bannerurl: require(".././../assets/images/banner/general.png"),
          text: "全村人民的希望",
          keshi: [
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
              name: "妇产科",
              imgurl: require(".././../assets/images/department/obstetrics.png")
            },
            {
              type: 10,
              name: "肿瘤科",
              imgurl: require(".././../assets/images/department/oncology.png")
            },
            {
              type: 11,
              name: "麻醉科",
              imgurl: require(".././../assets/images/department/anesthesiology.png")
            },
            {
              type: 12,
              name: "传染科",
              imgurl: require(".././../assets/images/department/infectieuses.png")
            },
            {
              type: 13,
              name: "检查科",
              imgurl: require(".././../assets/images/department/laboratory.png")
            },
            {
              type: 14,
              name: "胆识中心",
              imgurl: require(".././../assets/images/department/CourageInsightCenter.png")
            }
          ]
        },
        {
          bannerurl: require(".././../assets/images/banner/surgery.png"),
          text: "全村人民的希望",
          keshi: [
            {
              type: 0,
              name: "普外科",
              imgurl: require(".././../assets/images/department/emergency.png")
            },
            {
              type: 1,
              name: "心胸外科",
              imgurl: require(".././../assets/images/department/surgery.png")
            },
            {
              type: 2,
              name: "肝胆外科",
              imgurl: require(".././../assets/images/department/psychiatry.png")
            },
            {
              type: 3,
              name: "肠胃外科",
              imgurl: require(".././../assets/images/department/ChineseMedicine.png")
            },
            {
              type: 4,
              name: "脑外科",
              imgurl: require(".././../assets/images/department/skin.png")
            },
            {
              type: 5,
              name: "内科",
              imgurl: require(".././../assets/images/department/internal.png")
            },
            {
              type: 6,
              name: "泌尿外科",
              imgurl: require(".././../assets/images/department/pediatrics.png")
            },
            {
              type: 7,
              name: "骨科",
              imgurl: require(".././../assets/images/department/gynaecology.png")
            },
            {
              type: 8,
              name: "肛肠外科",
              imgurl: require(".././../assets/images/department/andrology.png")
            },
            {
              type: 9,
              name: "乳腺外科",
              imgurl: require(".././../assets/images/department/obstetrics.png")
            },
            {
              type: 10,
              name: "血管外",
              imgurl: require(".././../assets/images/department/oncology.png")
            },
            {
              type: 11,
              name: "器官移植",
              imgurl: require(".././../assets/images/department/anesthesiology.png")
            },
            {
              type: 12,
              name: "烧伤科",
              imgurl: require(".././../assets/images/department/infectieuses.png")
            },
            {
              type: 13,
              name: "手外科",
              imgurl: require(".././../assets/images/department/laboratory.png")
            },
            {
              type: 14,
              name: "外伤科",
              imgurl: require(".././../assets/images/department/CourageInsightCenter.png")
            }
          ]
        },
        {
          bannerurl: require(".././../assets/images/banner/internal.png"),
          text: "全村人民的希望",
          keshi: [
            {
              type: 0,
              name: "呼吸内科",
              imgurl: require(".././../assets/images/department/emergency.png")
            },
            {
              type: 1,
              name: "消化内科",
              imgurl: require(".././../assets/images/department/surgery.png")
            },
            {
              type: 2,
              name: "神经内科",
              imgurl: require(".././../assets/images/department/psychiatry.png")
            },
            {
              type: 3,
              name: "内分泌科",
              imgurl: require(".././../assets/images/department/ChineseMedicine.png")
            },
            {
              type: 4,
              name: "肾内科",
              imgurl: require(".././../assets/images/department/skin.png")
            },
            {
              type: 5,
              name: "风湿科",
              imgurl: require(".././../assets/images/department/internal.png")
            },
            {
              type: 6,
              name: "血液科",
              imgurl: require(".././../assets/images/department/pediatrics.png")
            },
            {
              type: 7,
              name: "心血管内科",
              imgurl: require(".././../assets/images/department/gynaecology.png")
            }
          ]
        },
        {
          bannerurl: require(".././../assets/images/banner/chinesemedical.png"),
          text: "全村人民的希望",
          keshi: [
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
              name: "妇产科",
              imgurl: require(".././../assets/images/department/obstetrics.png")
            },
            {
              type: 10,
              name: "肿瘤科",
              imgurl: require(".././../assets/images/department/oncology.png")
            },
            {
              type: 11,
              name: "麻醉科",
              imgurl: require(".././../assets/images/department/anesthesiology.png")
            },
            {
              type: 12,
              name: "传染科",
              imgurl: require(".././../assets/images/department/infectieuses.png")
            },
            {
              type: 13,
              name: "检查科",
              imgurl: require(".././../assets/images/department/laboratory.png")
            },
            {
              type: 14,
              name: "胆识中心",
              imgurl: require(".././../assets/images/department/CourageInsightCenter.png")
            }
          ]
        },
        {
          bannerurl: require(".././../assets/images/banner/general.png"),
          text: "全村人民的希望",
          keshi: [
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
              name: "妇产科",
              imgurl: require(".././../assets/images/department/obstetrics.png")
            },
            {
              type: 10,
              name: "肿瘤科",
              imgurl: require(".././../assets/images/department/oncology.png")
            },
            {
              type: 11,
              name: "麻醉科",
              imgurl: require(".././../assets/images/department/anesthesiology.png")
            },
            {
              type: 12,
              name: "传染科",
              imgurl: require(".././../assets/images/department/infectieuses.png")
            },
            {
              type: 13,
              name: "检查科",
              imgurl: require(".././../assets/images/department/laboratory.png")
            },
            {
              type: 14,
              name: "胆识中心",
              imgurl: require(".././../assets/images/department/CourageInsightCenter.png")
            }
          ]
        },
        {
          bannerurl: require(".././../assets/images/banner/general.png"),
          text: "全村人民的希望",
          keshi: [
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
              name: "妇产科",
              imgurl: require(".././../assets/images/department/obstetrics.png")
            },
            {
              type: 10,
              name: "肿瘤科",
              imgurl: require(".././../assets/images/department/oncology.png")
            },
            {
              type: 11,
              name: "麻醉科",
              imgurl: require(".././../assets/images/department/anesthesiology.png")
            },
            {
              type: 12,
              name: "传染科",
              imgurl: require(".././../assets/images/department/infectieuses.png")
            },
            {
              type: 13,
              name: "检查科",
              imgurl: require(".././../assets/images/department/laboratory.png")
            },
            {
              type: 14,
              name: "胆识中心",
              imgurl: require(".././../assets/images/department/CourageInsightCenter.png")
            }
          ]
        },
        {
          bannerurl: require(".././../assets/images/banner/skin.png"),
          text: "全村人民的希望",
          keshi: [
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
              name: "妇产科",
              imgurl: require(".././../assets/images/department/obstetrics.png")
            },
            {
              type: 10,
              name: "肿瘤科",
              imgurl: require(".././../assets/images/department/oncology.png")
            },
            {
              type: 11,
              name: "麻醉科",
              imgurl: require(".././../assets/images/department/anesthesiology.png")
            },
            {
              type: 12,
              name: "传染科",
              imgurl: require(".././../assets/images/department/infectieuses.png")
            },
            {
              type: 13,
              name: "检查科",
              imgurl: require(".././../assets/images/department/laboratory.png")
            },
            {
              type: 14,
              name: "胆识中心",
              imgurl: require(".././../assets/images/department/CourageInsightCenter.png")
            }
          ]
        },
        {
          bannerurl: require(".././../assets/images/banner/general.png"),
          text: "全村人民的希望",
          keshi: [
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
              name: "妇产科",
              imgurl: require(".././../assets/images/department/obstetrics.png")
            },
            {
              type: 10,
              name: "肿瘤科",
              imgurl: require(".././../assets/images/department/oncology.png")
            },
            {
              type: 11,
              name: "麻醉科",
              imgurl: require(".././../assets/images/department/anesthesiology.png")
            },
            {
              type: 12,
              name: "传染科",
              imgurl: require(".././../assets/images/department/infectieuses.png")
            },
            {
              type: 13,
              name: "检查科",
              imgurl: require(".././../assets/images/department/laboratory.png")
            },
            {
              type: 14,
              name: "胆识中心",
              imgurl: require(".././../assets/images/department/CourageInsightCenter.png")
            }
          ]
        },
        {
          bannerurl: require(".././../assets/images/banner/andrology.png"),
          text: "全村人民的希望",
          keshi: [
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
              name: "妇产科",
              imgurl: require(".././../assets/images/department/obstetrics.png")
            },
            {
              type: 10,
              name: "肿瘤科",
              imgurl: require(".././../assets/images/department/oncology.png")
            },
            {
              type: 11,
              name: "麻醉科",
              imgurl: require(".././../assets/images/department/anesthesiology.png")
            },
            {
              type: 12,
              name: "传染科",
              imgurl: require(".././../assets/images/department/infectieuses.png")
            },
            {
              type: 13,
              name: "检查科",
              imgurl: require(".././../assets/images/department/laboratory.png")
            },
            {
              type: 14,
              name: "胆识中心",
              imgurl: require(".././../assets/images/department/CourageInsightCenter.png")
            }
          ]
        },
        {
          bannerurl: require(".././../assets/images/banner/general.png"),
          text: "全村人民的希望",
          keshi: [
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
              name: "妇产科",
              imgurl: require(".././../assets/images/department/obstetrics.png")
            },
            {
              type: 10,
              name: "肿瘤科",
              imgurl: require(".././../assets/images/department/oncology.png")
            },
            {
              type: 11,
              name: "麻醉科",
              imgurl: require(".././../assets/images/department/anesthesiology.png")
            },
            {
              type: 12,
              name: "传染科",
              imgurl: require(".././../assets/images/department/infectieuses.png")
            },
            {
              type: 13,
              name: "检查科",
              imgurl: require(".././../assets/images/department/laboratory.png")
            },
            {
              type: 14,
              name: "胆识中心",
              imgurl: require(".././../assets/images/department/CourageInsightCenter.png")
            }
          ]
        },
        {
          bannerurl: require(".././../assets/images/banner/general.png"),
          text: "全村人民的希望",
          keshi: [
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
              name: "妇产科",
              imgurl: require(".././../assets/images/department/obstetrics.png")
            },
            {
              type: 10,
              name: "肿瘤科",
              imgurl: require(".././../assets/images/department/oncology.png")
            },
            {
              type: 11,
              name: "麻醉科",
              imgurl: require(".././../assets/images/department/anesthesiology.png")
            },
            {
              type: 12,
              name: "传染科",
              imgurl: require(".././../assets/images/department/infectieuses.png")
            },
            {
              type: 13,
              name: "检查科",
              imgurl: require(".././../assets/images/department/laboratory.png")
            },
            {
              type: 14,
              name: "胆识中心",
              imgurl: require(".././../assets/images/department/CourageInsightCenter.png")
            }
          ]
        },
        {
          bannerurl: require(".././../assets/images/banner/general.png"),
          text: "全村人民的希望",
          keshi: [
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
              name: "妇产科",
              imgurl: require(".././../assets/images/department/obstetrics.png")
            },
            {
              type: 10,
              name: "肿瘤科",
              imgurl: require(".././../assets/images/department/oncology.png")
            },
            {
              type: 11,
              name: "麻醉科",
              imgurl: require(".././../assets/images/department/anesthesiology.png")
            },
            {
              type: 12,
              name: "传染科",
              imgurl: require(".././../assets/images/department/infectieuses.png")
            },
            {
              type: 13,
              name: "检查科",
              imgurl: require(".././../assets/images/department/laboratory.png")
            },
            {
              type: 14,
              name: "胆识中心",
              imgurl: require(".././../assets/images/department/CourageInsightCenter.png")
            }
          ]
        },
        {
          bannerurl: require(".././../assets/images/banner/general.png"),
          text: "全村人民的希望",
          keshi: [
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
              name: "妇产科",
              imgurl: require(".././../assets/images/department/obstetrics.png")
            },
            {
              type: 10,
              name: "肿瘤科",
              imgurl: require(".././../assets/images/department/oncology.png")
            },
            {
              type: 11,
              name: "麻醉科",
              imgurl: require(".././../assets/images/department/anesthesiology.png")
            },
            {
              type: 12,
              name: "传染科",
              imgurl: require(".././../assets/images/department/infectieuses.png")
            },
            {
              type: 13,
              name: "检查科",
              imgurl: require(".././../assets/images/department/laboratory.png")
            },
            {
              type: 14,
              name: "胆识中心",
              imgurl: require(".././../assets/images/department/CourageInsightCenter.png")
            }
          ]
        },
        {
          bannerurl: require(".././../assets/images/banner/general.png"),
          text: "全村人民的希望",
          keshi: [
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
              name: "妇产科",
              imgurl: require(".././../assets/images/department/obstetrics.png")
            },
            {
              type: 10,
              name: "肿瘤科",
              imgurl: require(".././../assets/images/department/oncology.png")
            },
            {
              type: 11,
              name: "麻醉科",
              imgurl: require(".././../assets/images/department/anesthesiology.png")
            },
            {
              type: 12,
              name: "传染科",
              imgurl: require(".././../assets/images/department/infectieuses.png")
            },
            {
              type: 13,
              name: "检查科",
              imgurl: require(".././../assets/images/department/laboratory.png")
            },
            {
              type: 14,
              name: "胆识中心",
              imgurl: require(".././../assets/images/department/CourageInsightCenter.png")
            }
          ]
        },
        {
          bannerurl: require(".././../assets/images/banner/infectieuses.png"),
          text: "全村人民的希望",
          keshi: [
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
              name: "妇产科",
              imgurl: require(".././../assets/images/department/obstetrics.png")
            },
            {
              type: 10,
              name: "肿瘤科",
              imgurl: require(".././../assets/images/department/oncology.png")
            },
            {
              type: 11,
              name: "麻醉科",
              imgurl: require(".././../assets/images/department/anesthesiology.png")
            },
            {
              type: 12,
              name: "传染科",
              imgurl: require(".././../assets/images/department/infectieuses.png")
            },
            {
              type: 13,
              name: "检查科",
              imgurl: require(".././../assets/images/department/laboratory.png")
            },
            {
              type: 14,
              name: "胆识中心",
              imgurl: require(".././../assets/images/department/CourageInsightCenter.png")
            }
          ]
        },
        {
          bannerurl: require(".././../assets/images/banner/imaging.png"),
          text: "全村人民的希望",
          keshi: [
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
              name: "妇产科",
              imgurl: require(".././../assets/images/department/obstetrics.png")
            },
            {
              type: 10,
              name: "肿瘤科",
              imgurl: require(".././../assets/images/department/oncology.png")
            },
            {
              type: 11,
              name: "麻醉科",
              imgurl: require(".././../assets/images/department/anesthesiology.png")
            },
            {
              type: 12,
              name: "传染科",
              imgurl: require(".././../assets/images/department/infectieuses.png")
            },
            {
              type: 13,
              name: "检查科",
              imgurl: require(".././../assets/images/department/laboratory.png")
            },
            {
              type: 14,
              name: "胆识中心",
              imgurl: require(".././../assets/images/department/CourageInsightCenter.png")
            }
          ]
        },
        {
          bannerurl: require(".././../assets/images/banner/beauty.png"),
          text: "全村人民的希望",
          keshi: [
            {
              type: 0,
              name: "眼科",
              imgurl: require(".././../assets/images/department/emergency.png")
            },
            {
              type: 1,
              name: "耳鼻喉科",
              imgurl: require(".././../assets/images/department/surgery.png")
            },
            {
              type: 2,
              name: "口腔科",
              imgurl: require(".././../assets/images/department/psychiatry.png")
            }
          ]
        }
      ]
    };
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
      // console.log(scrollTop);
      // console.log(offsetTop);
      if (scrollTop > offsetTop) {
        this.isFixed = true;
      } else {
        this.isFixed - false;
      }
    },
    _initScroll() {
      this.treeScroll = new BScroll(this.$refs.conterWrapper, {});
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    // this.$nextTick(() => {
    //   this._initScroll();
    // });
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  components: {}
};
</script>
<style lang="stylus" scoped>
.sort {
  padding-bottom: 50px;

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

    .tree-wrapper {
      text-align: center;

      .van-sidebar-item--select {
        color: #323233;
        font-size: 16px;
        font-weight: 500;
        border-color: #07c160;
        background-color: #fff;
      }
    }

    .sort-wrapper {
      padding: 10px;

      .imgurl {
        padding: 10px 10px;
        height: 90px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .title {
        margin-left: 5px;
        font-size: 14px;
        font-weight: bold;
        text-align: left;
      }

      .sortWrapper {
        .icons {
          float: left;
          text-align: center;
          width: 30%;
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

          .iconfont {
            font-size: 45px;
            margin: 2px;
          }
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