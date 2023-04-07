import Vue from "vue"

import App from "./App.vue"
import hycontextmenu from "./origin.js"

Vue.config.productionTip = false

Vue.use(hycontextmenu)

new Vue({
 render: h => h(App)
}).$mount('#app')
