import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Typenav from './compontents/Typenav/typenav.vue'
import store from './store'
import '@/mock/mockServer'
import Carousel from './compontents/Carousel'

import Pagination from './compontents/Pagination'
Vue.component('Pagination',Pagination)

Vue.component('Carousel',Carousel)//全局组件

Vue.component('Typenav',Typenav)//全局组件

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  }

}).$mount('#app')
