<template>
  <div class="base">
    <el-container class="wrapper">
      <el-aside width="auto">
        <div class="navBtn" @click="isCollapse = !isCollapse">
          <img src="../assets/image/logo.gif" alt="" width="60px" height="60px">
        </div>
        <el-menu default-active="" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#333" text-color="#fff" router='true'>
          <el-menu-item index="main">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </el-menu-item>
          <el-menu-item index="test">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      isCollapse: true,
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.base,
.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #333;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.navBtn {
  line-height: 60px;
  background: #b3c0d1;
  text-align: center;
  height: 60px;
}
.el-menu{
  border: none;
}
</style>
