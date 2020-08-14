import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.prototype.axios=axios;

const store = new Vuex.Store ({
  state: {
    jugadorA: 0,
    jugadorB: 0
  },
  mutations: {
    updatePuntaje1 (state, jugadorA){
      state.jugadorA= jugadorA;
    },
    updatePuntaje2 (state, jugadorB){
      state.jugadorB= jugadorB;
    }
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
