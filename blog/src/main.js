// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import VueFire from 'vuefire'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

require('../node_modules/bulma/css/bulma.css')
require('./bradcomp.js')

