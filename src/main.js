import Vue from 'vue'
import App from './App.vue'
import toPersianNumber from './filters/toPersianNumber'
import toPersianDate from './filters/toPersianDate'
import toRelativeDate from './filters/toRelativeDate'
import toPersianCurrency from './filters/toPersianCurrency'
import toPersianTruncate from './filters/toPersianTruncate'
import toPersianDigits from './filters/toPersianDigits'

Vue.config.productionTip = false

let VuePlugin = {
  install: function () {
    Vue.filter('toPersianNumber', toPersianNumber)
    Vue.filter('toPersianDate', toPersianDate)
    Vue.filter('toRelativeDate', toRelativeDate)
    Vue.filter('toPersianCurrency', toPersianCurrency)
    Vue.filter('toPersianTruncate', toPersianTruncate)
    Vue.filter('toPersianDigits', toPersianDigits)
  }
}
Vue.use(VuePlugin)

export default VuePlugin

new Vue({
  render: h => h(App)
}).$mount('#app')
