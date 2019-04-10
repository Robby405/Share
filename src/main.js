import Vue from 'vue'
import VueRouter from 'vue-router' 
import Icon from 'vue2-svg-icon/Icon.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../theme/index.css'
import VueWangeditor from 'vue-wangeditor-simple'

import router from './router'
import App from './App.vue'
import GLOBAL from './global'

Vue.prototype.GLOBAL = GLOBAL
Vue.config.productionTip = false
Vue.component('icon',Icon)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueWangeditor)

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
