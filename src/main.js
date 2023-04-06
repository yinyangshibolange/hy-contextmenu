import Vue from "vue"

import App from "./App.vue"
import hycontextmenu from "./index.js"

Vue.config.productionTip = false

Vue.use(hycontextmenu)

new Vue({
 render: h => h(App)
}).$mount('#app')