<template>
    <div class="menu-container" :class="[theme, {
  show_toolbar,
  show_editor,
  show_cmd,
 }]" @contextmenu="openCustomMenu">
        <div class="toolbar">我是工具栏</div>
        <div class="editor">
            <textarea name="my_editor" id="my_editor_1" rows="17" style="width: 50%"></textarea>
        </div>
        <div class="cmd">我是cmd</div>
        在任意地方点击右键
    </div>
</template>

<script>
export default {
    data() {
        return {
            ctx_menu: null, //
            theme: 'light',
            show_toolbar: true,
            show_editor: false,
            show_cmd: false,
            menu_items: [
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
                    text: "主题切换(点击后不关闭)",
                    custom_style: {
                        backgroundColor: '#000',
                        color: '#fff',
                    },
                    trigger: 'hover',
                    click: (item, ev, el) => {
                        console.log("显示", item)
                    },
                    children: [{
                        icon_class: "iconfont icon-light",
                        text: "light",
                        selector: true,
                        group: 'theme',
                        checked: true,
                        click_keep: true,
                        click: (item, ev, el) => {
                            this.theme = item.text
                            console.log("light", item);
                        }
                    }, {
                        icon_class: "iconfont icon-dark",
                        text: "dark",
                        selector: true,
                        group: 'theme',
                        click_keep: true,
                        click: (item, ev, el) => {
                            this.theme = item.text
                            console.log("dark", item);
                        }
                    },]
                },
            ]
        }
    },
    watch: {
      theme(val) {
          if(this.ctx_menu) this.ctx_menu.setTheme(val )
      }
    },
    methods: {
        openCustomMenu(ev) {
            ev.preventDefault();
            const {clientX, clientY} = ev
            this.ctx_menu = this.$createRightMenu(clientX,  clientY, this.menu_items,);
        }
    }
}
</script>

<style lang="scss" scoped>
.menu-container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: bold;

  &.light {
    background: #fff;
    color: #000;
  }

  &.dark {
    background: #000;
    color: #fff;
  }

  .toolbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 20px;
    display: none;
  }

  .cmd {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    display: none;
  }

  .editor {
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    padding: 20px;
    display: none;
  }

  &.show_toolbar {
    .toolbar {
      display: block;
    }
  }

  &.show_cmd {
    .cmd {
      display: block;
    }
  }

  &.show_editor {
    .editor {
      display: block;
    }
  }
}
</style>
