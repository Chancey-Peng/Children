// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import fastClick from 'fastclick'

import Vant from 'vant'
import 'vant/lib/index.css'

import './common/icons/stylus/index.styl'
import '../static/css/reset.css'
// 解决手机端一像素问题
import '../static/css/border.css'

Vue.config.productionTip = false

// 解决移动端点击300毫秒延迟问题
// fastClick.attach(document.body)

Vue.use(Vant);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
