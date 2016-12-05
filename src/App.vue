<style lang="css" src="element-ui/lib/theme-default/index.css"></style>
<style lang="styl" src="styl/base.styl"></style>
<style lang="styl" src="styl/cnode.styl" scoped></style>
<template>
  <div id="app" class="container">
    <header>
      <div class="head-info">
        <h1 class="head-img">
          <img src="./assets/img/cnodejs_light.svg" alt="">
        </h1>
        <div class="search">
          <el-input
            placeholder="请输入内容"
            v-model="search">
          </el-input>
        </div>
      </div>
      <el-menu
      theme="dark"
      class="nav"
      default-active="1"
      mode="horizontal"
      @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="2">处理中心</el-menu-item>
        <el-menu-item index="3">处理中心</el-menu-item>
        <el-menu-item index="4">处理中心</el-menu-item>
      </el-menu>
    </header>
    <div class="main">
      <section>
        <router-view></router-view>
      </section>
      <div class="sidebar">
        <router-view name="sidebar"></router-view>        
      </div>
    </div>
  </div>
</template>

<script>
  import store from 'store/store.js'
  export default {
    store,
    data () {
      return {
        search: ''
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
