import {createRightMenu} from './package/menu.js'
import "./package/menu.scss"

// 注册
const install = function(Vue){
 if(Vue.prototype) Vue.prototype.$createRightMenu = createRightMenu
 if(Vue.config.globalProperties) Vue.config.globalProperties.$createRightMenu = createRightMenu
}

window.createRightMenu = createRightMenu

export default install;
