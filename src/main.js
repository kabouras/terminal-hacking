import Vue from 'vue'
import App from './App.vue'
import { Plugin } from 'vue-fragment'


Vue.config.productionTip = false

// Vue.config.keyCodes = {
//   // enter: 13,
//   left: 37,
//   right: 39,
//   up: 38,
//   down: 40
// }

Vue.use(Plugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
