import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

Vue.prototype.$http = axios

new Vue({
  el: '#app',
  render: h => h(App)
})

// 卧槽这真他妈行！ 2018年5月8日 21点06分