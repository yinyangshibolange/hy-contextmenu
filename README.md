# hy-contextmenu

![fgh1.gif](/src/static/shotscreen.png)

> 多级右键菜单，带选项选择，可多选，单选  ，兼容任意web程序。 
> 
> 当前版本：v1.0.0

## 安装方式

1. npm/yarn方式安装
```shell
npm run install  
or  
yarn install  
```

2. cdn方式
```html
<script src="https://cdn.jsdelivr.net/gh/yinyangshibolange/hy-contextmenu/lib/hycontextmenu.umd.js"></script>  
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yinyangshibolange/hy-contextmenu/lib/hycontextmenu.css">
```


## 菜单配置项
| key          | type（类型）         | Description（描述）                         | Default（默认） |
|--------------|------------------|-----------------------------------------|-------------|
| icon_class   | String           | 左侧图标class                               | ''          |
| icon_img     | String           | 左侧图标img，图标图片形式                          | ''          |
| text         | String           | 菜单项文本                                   | ''          |
| border_top   | Boolean          | 菜单项是否显示上边框，即分割线                         | false       |
| trigger      | 'click'\|'hover' | 子菜单触发方式                                 | 'click'     |
| children     | Array            | 子菜单列表                                   | undefined   |
| selector     | Boolean          | 是否是选择项                                  | false       |
| group        | String           | 选择项分组(在同一个具有相同分组名称的项为一个单选组)             | undefined   |
| checked      | Boolean          | 可以设置选项是否默认选中                            | false       |
| custom_class | String           | 自定义class，作用在每个菜单项的li上                   | undefined   |
| custom_style | Object           | 自定义style，作用在每个菜单项的li上                   | undefined   |
| click_keep   | Boolean          | 是否在点击菜单项之后保持菜单显示                        | false       |
| click        | Function         | 点击菜单项之后的回调，回调参数为item,ev,el，item是菜单项配置参数 | undefined   |

## demo
demo地址：<https://github.com/yinyangshibolange/hy-contextmenu>

demo中的配置项
```javascript
const menu_list = [
                {
                    icon_img: require("../static/sync.png"),
                    text: "同步到服务器",
                    click: (item, ev, el) => {
                        console.log("同步到服务器", item);
                    },
                },
                {
                    icon_class: "",
                    text: "hover",
                    border_top: true,
                    click: (item, ev, el) => {
                        console.log("hover", item);
                    },
                    trigger: 'hover',
                    children: [{
                        icon_class: "",
                        text: "click",
                        trigger: 'click',
                        children: [{
                            icon_class: "iconfont icon-zhongmingming",
                            text: "重命名",
                            click: (item, ev, el) => {
                                console.log("重命名", item);
                            },
                        },
                            {
                                icon_class: "iconfont icon-changyonggoupiaorenshanchu",
                                text: "删除",
                                click: (item, ev, el) => {
                                    console.log("删除", item);
                                },
                            },
                            {
                                icon_class: "iconfont icon-zitiyulan",
                                text: "预览",
                                click: (item, ev, el) => {
                                    console.log("预览", item);
                                },
                            },]
                    },]
                },
                {
                    icon_class: "",
                    text: "click",
                    click: (item, ev, el) => {
                        console.log("click", item);
                    },
                    trigger: 'click',
                    children: [{
                        icon_class: "",
                        text: "hover",
                        trigger: 'hover',
                        children: [{
                            icon_class: "iconfont icon-zhongmingming",
                            text: "重命名",
                            click: (item, ev, el) => {
                                console.log("重命名", item);
                            },
                        },
                            {
                                icon_class: "iconfont icon-changyonggoupiaorenshanchu",
                                text: "删除",
                                border_top: true,
                                click: (item, ev, el) => {
                                    console.log("删除", item);
                                },
                            },
                            {
                                icon_class: "iconfont icon-zitiyulan",
                                text: "预览",
                                border_top: true,
                                click: (item, ev, el) => {
                                    console.log("预览", item);
                                },
                            },]
                    },]
                },
                {
                    icon_class: "iconfont icon-jianqie",
                    text: "剪切",
                    click: (item, ev, el) => {
                        console.log("剪切", item);
                    },
                },

                {
                    icon_class: "iconfont icon-nav_icon_fabuguanli",
                    text: "发布",
                    children: [{
                        icon_class: "iconfont icon-nav_icon_fabuguanli",
                        text: "发布到安卓",
                        click: (item, ev, el) => {
                            console.log("发布到安卓", item);
                        }
                    }, {
                        icon_class: "iconfont icon-nav_icon_fabuguanli",
                        text: "发布到ios",
                        click: (item, ev, el) => {
                            console.log("发布到ios", item);
                        }
                    },]
                },
                {
                    icon_class: "iconfont icon-zhuti_tiaosepan",
                    text: "方案切换",
                    border_top: true,
                    // selector: true,
                    trigger: 'hover',
                    children: [{
                        icon_class: "iconfont icon-light",
                        text: "light",
                        selector: true,
                        group: 'theme',
                        checked: true,
                        click: (item, ev, el) => {
                            this.theme = item.text
                            console.log("light", item);
                        }
                    }, {
                        icon_class: "iconfont icon-dark",
                        text: "dark",
                        selector: true,
                        group: 'theme',
                        click: (item, ev, el) => {
                            this.theme = item.text
                            console.log("dark", item);
                        }
                    },]
                },
                {
                    icon_class: "iconfont icon-computer",
                    text: "显示",
                    custom_class: "custom_li my_li",
                    trigger: 'hover',
                    click: (item, ev, el) => {
                        console.log("显示", item)
                    },
                    children: [{
                        icon_class: "",
                        text: "显示工具栏",
                        selector: true,
                        checked: true,
                        click: (item, ev, el) => {
                            this.show_toolbar = item.checked
                            console.log("显示工具栏", item);
                        }
                    }, {
                        icon_class: "",
                        text: "显示编辑器",
                        selector: true,
                        click: (item, ev, el) => {
                            this.show_editor = item.checked
                            console.log("显示编辑器", item);
                        }
                    }, {
                        icon_class: "",
                        text: "显示终端",
                        selector: true,
                        click: (item, ev, el) => {
                            this.show_cmd = item.checked
                            console.log("显示终端", item);
                        }
                    }]
                },
                {
                    icon_class: "iconfont icon-computer",
                    text: "显示(点击后不关闭)",
                    custom_style: {
                        backgroundColor: '#000',
                        color: '#fff',
                    },
                    trigger: 'hover',
                    click: (item, ev, el) => {
                        console.log("显示", item)
                    },
                    children: [{
                        icon_class: "",
                        text: "显示工具栏",
                        selector: true,
                        checked: true,
                        click_keep: true,
                        click: (item, ev, el) => {
                            this.show_toolbar = item.checked
                            console.log("显示工具栏", item);
                        }
                    }, {
                        icon_class: "",
                        text: "显示编辑器",
                        selector: true,
                        click_keep: true,
                        click: (item, ev, el) => {
                            this.show_editor = item.checked
                            console.log("显示编辑器", item);
                        }
                    }, {
                        icon_class: "",
                        text: "显示终端",
                        selector: true,
                        click_keep: true,
                        click: (item, ev, el) => {
                            this.show_cmd = item.checked
                            console.log("显示终端", item);
                        }
                    }]
                },
            ]
```

## 使用方法
1. 在html原生js使用方式
```html  
<script src="https://cdn.jsdelivr.net/gh/yinyangshibolange/hy-contextmenu/lib/hycontextmenu.umd.js"></script>  
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yinyangshibolange/hy-contextmenu/lib/hycontextmenu.css">

<!-- 如果cdn链接失效，那就把项目https://github.com/yinyangshibolange/hy-contextmenu下载下来，然后引入lib下的umd.js和css -->
<body>
<div id="ctx_menu"></div>
</body>
<script>
    const el = document.getElementById("ctx_menu")
    el.oncontextmenu = function(ev) {
        const {clientX, clientY} = ev
        const menu_list = [] // 菜单选项
        window.createRightMenu(clientX, clientY, menu_list)
    }

</script> 
```  

2.在vue2项目中使用
```javascript  
// 在vue2项目中
import Vue from "vue"
import hycontextmenu from "hy-contextmenu"
import "hy-contextmenu/lib/hycontextmenu.css"

Vue.use(hycontextmenu)

```
然后在Vue实例中
```javascript
const menu_list = []
this.$createRightMenu(x, y, menu_list)
```

3.在vue3项目中使用
```javascript
import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'

import hycontextmenu from "hy-contextmenu"
import "hy-contextmenu/lib/hycontextmenu.css"

const app = createApp(App);
app.use(hycontextmenu)

```

setup模式使用方式
```javascript
// 获取vue实例
const instance = getCurrentInstance()
const menu_list = []
instance.proxy.$createRightMenu(x, y, menu_list)
```
非setup模式与vue2使用方式相同

ps: 有什么需求可在issues中提给我
