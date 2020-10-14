import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store/vuex';

Vue.config.productionTip = false
console.log("gola")
new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
