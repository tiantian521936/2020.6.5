import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Typenav from './compontents/Typenav/typenav.vue'
Vue.component('Typenav',Typenav)//全局组件
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
