<template>
  <div id="layout">
    <el-row>
      <el-col :span="24">
        <el-container>
          <el-header height="auto">
            <top-head></top-head>
          </el-header>
          <el-container>
            <el-header>Header1</el-header>
            <el-container>
            <el-aside width="200px">Aside</el-aside>
              <el-container>
                <el-main>
                  <layout-main></layout-main>
                </el-main>
                <el-footer>Footer</el-footer>
              </el-container>
            </el-container>
          </el-container>
        </el-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LayoutMain from './LayoutMain.vue';
import TopHead from './TopHead.vue';

export default {
  name: "layout",
  components: {
    LayoutMain,
    TopHead
  }
};
</script>

<style scoped>
  .el-header {
    padding: 0;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    /* text-align: center; */
    /* line-height: 60px; */
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /* text-align: center; */
    /* line-height: 160px; */
    min-height: 100px;
    padding: 0;
    margin: 0;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
</style>
