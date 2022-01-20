<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    max-height="500">
    <el-table-column
      prop="createDate"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="pageName"
      label="页面名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="pageUrl"
      label="页面url">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small"> 访问 </el-button>
        <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"> 移除 </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {apiAddress} from '../../request/api'

  export default {
    name: 'Home',
    created () {
      this.onLoad();
    },
    methods: {
      //获取数据
      onLoad() {
        //调用api接口，并且提供了两个参数
        apiAddress({
          type: 0,
          sort: 1
        }).then(res => {
          //获取数据成功后的其他操作
          this.tableData = res;
        })
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      handleClick(row) {
        var gotoLink = document.createElement('a');
        gotoLink.href = row.pageUrl;
        gotoLink.rel = "noreferrer"
        document.body.appendChild(gotoLink);
        gotoLink.click();
        window.location.href=row.pageUrl;
      }
    },
    data() {
      return {
        tableData: [{
          createDate: '2022-01-11',
          pageName: 'mds本地服务登录',
          pageUrl: 'http://192.168.0.200:8085/client/bsp/jsp/login.jsp'
        }]
      }
    },
  }
</script>