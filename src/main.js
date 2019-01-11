import Vue from 'vue'
import App from './App.vue'
import toPersianNumber from './filters/toPersianNumber'
import toPersianDate from './filters/toPersianDate'
Vue.config.productionTip = false

let VuePlugin = {
  install: function () {
    Vue.filter('toPersianNumber', toPersianNumber)
    Vue.filter('toPersianDate', toPersianDate)
  }
}
Vue.use(VuePlugin)

export default VuePlugin

new Vue({
  render: h => h(App)
}).$mount('#app')
