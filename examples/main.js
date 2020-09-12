import Vue from 'vue'
import App from './App.vue'
import DreamUI from '../packages'
Vue.config.productionTip = false
Vue.use(DreamUI)


new Vue({
  render: h => h(App),
}).$mount('#app')
