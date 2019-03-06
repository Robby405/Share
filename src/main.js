import Vue from 'vue'
import VueRouter from 'vue-router' 
import Icon from 'vue2-svg-icon/Icon.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.component('icon',Icon)
Vue.use(VueRouter)
Vue.use(ElementUI)

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
