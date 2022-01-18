import Vue from 'vue'
// import App from './App.vue'
import MyApp from './MyApp.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = 

new Vue({
  router,
  store,
  render: h => h(MyApp)
}).$mount('#app')
