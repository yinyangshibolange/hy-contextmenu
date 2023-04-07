# hy-contextmenu

![fgh1.gif](http://rqisd4yi1.hd-bkt.clouddn.com/fgh1.gif)

## 当前版本：v1.0.0
## 多级右键菜单，带选项选择，可多选，单选  ，兼容任意web程序

## 安装方式

1. npm/yarn方式安装
```  
npm run install  
or  
yarn install  
```  

2. cdn方式
```html
<script src="https://cdn.jsdelivr.net/gh/yinyangshibolange/hy-contextmenu/lib/hycontextmenu.umd.js"></script>  
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yinyangshibolange/hy-contextmenu/lib/hycontextmenu.css">
```
### demo
运行本项目npm run serve 或者 yarn serve


1. 通用使用方法，将插件和js导入项目
```html  
  
<script src="/lib/hycontextmenu.umd.js"></script>  
<link rel="stylesheet" href="../lib/hycontextmenu.css">
  
Vue.use(hycontextmenu)  
  
```  

在组件中使用
```javascript  
this.$createRightMenu(x, y, menulist)  
  
```


ps: 有什么需求可在issues中提给我
