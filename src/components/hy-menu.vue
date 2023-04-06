<template>
 <h1 class="menu-container" @contextmenu="openCustomMenu">
  在任意地方点击右键
 </h1>
</template>

<script>
export default {
 methods: {
  openCustomMenu (ev) {
   ev.preventDefault();
   const { clientX, clientY } = ev
   this.$createRightMenu(clientX, clientY, [
    {
     icon_class: "el-icon-upload",
     text: "同步到服务器",
     click: (item) => {
      console.log("同步到服务器", item);
     },
    },
    {
     icon_class: "el-icon-download",
     text: "hover",
     click: (item) => {
      console.log("hover", item);
     },
     trigger: 'hover',
     children: [{
      icon_class: "",
      text: "click",
      trigger: 'click',
      children: [{
       icon_class: "",
       text: "重命名",
       click: (item) => {
        console.log("重命名", item);
       },
      },
      {
       icon_class: "el-icon-delete",
       text: "删除",
       click: (item) => {
        console.log("删除", item);
       },
      },
      {
       icon_class: "el-icon-view",
       text: "预览",
       click: (item) => {
        console.log("预览", item);
       },
      },]
     },]
    },
    {
     icon_class: "el-icon-download",
     text: "click",
     click: (item) => {
      console.log("click", item);
     },
     trigger: 'click',
     children: [{
      icon_class: "",
      text: "hover",
      trigger: 'hover',
      children: [{
       icon_class: "",
       text: "重命名",
       click: (item) => {
        console.log("重命名", item);
       },
      },
      {
       icon_class: "el-icon-delete",
       text: "删除",
       click: (item) => {
        console.log("删除", item);
       },
      },
      {
       icon_class: "el-icon-view",
       text: "预览",
       click: (item) => {
        console.log("预览", item);
       },
      },]
     },]
    },
    {
     icon_class: "el-icon-scissors",
     text: "剪切",
     click: (item) => {
      console.log("剪切", item);
     },
    },

    {
     icon_class: "",
     text: "发布",
     children: [{
      icon_class: "",
      text: "发布到安卓",
      click: (item) => {
       console.log("发布到安卓", item);
      }
     }, {
      icon_class: "",
      text: "发布到ios",
      click: (item) => {
       console.log("发布到ios", item);
      }
     },]
    },
    {
     icon_class: "",
     text: "方案切换",
     selector: true,
     children: [{
      icon_class: "",
      text: "dark",
      click: (item) => {
       console.log("dark", item);
      }
     }, {
      icon_class: "",
      text: "light",
      click: (item) => {
       console.log("light", item);
      }
     }]
    },
    {
     icon_class: "",
     text: "显示",
     selector: true,
     multiple: true,
     click: (item) => {
      console.log("显示", item)
     },
     children: [{
      icon_class: "",
      text: "显示工具栏",
      click: (item) => {
       console.log("显示工具栏", item);
      }
     }, {
      icon_class: "",
      text: "显示编辑器",
      click: (item) => {
       console.log("显示编辑器", item);
      }
     }, {
      icon_class: "",
      text: "显示终端",
      click: (item) => {
       console.log("显示终端", item);
      }
     }]
    },

   ]);

  }
 }
}
</script>

<style>
.menu-container {
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
}
</style>
