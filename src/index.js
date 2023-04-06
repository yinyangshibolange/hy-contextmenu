import {createRightMenu} from './package/menu'
 
// 注册
const install = function(Vue){
 Vue.prototype.$createRightMenu = createRightMenu
}
 
export default install;