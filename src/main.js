import Vue from 'vue'
import { BootstrapVue} from 'bootstrap-vue'    // bootstrap
import 'bootstrap/dist/css/bootstrap.css'      // bootstrap
import 'bootstrap-vue/dist/bootstrap-vue.css'  // bootstrap
import App from './App.vue'

Vue.use(BootstrapVue)   // bootstrap 
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
