# hy-contextmenu
## 当前版本：v1.0.0
## 多级右键菜单，带选项选择，可多选，单选

## 安装本项目依赖
```
npm run install
or
yarn install
```

### demo
运行本项目npm run serve 或者 yarn serve


使用方法，将插件导入项目
```javascript

import hycontextmenu from "hy-contextmenu"
import "hy-contextmenu/dist/hy-contextmenu.css"

Vue.use(hycontextmenu)

```

在组件中使用
```javascript
this.$createRightMenu(x, y, menulist)

```
