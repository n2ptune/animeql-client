import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createProvider } from './vue-apollo'
import 'reset-css'
import '@/assets/styles/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHeart)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
