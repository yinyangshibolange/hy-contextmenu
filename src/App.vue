<template>
<div id="app">
 <hy-menu></hy-menu>
</div>
</template>

<script>
import hyMenu from "./components/hy-menu.vue"
export default {
 components: {hyMenu}
}
</script>

<style>
html,body,#app {
 width: 100%;
 height: 100%;
 margin: 0;
 padding: 0;
}
</style>