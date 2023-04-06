import {createRightMenu} from './package/menu.js'
import "./package/menu.scss"
 
// 注册
const install = function(Vue){
 Vue.prototype.$createRightMenu = createRightMenu
}
 
export default install;