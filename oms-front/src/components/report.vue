<template>
    <div>
      <p>报告管理</p>
      <el-input v-model="keyword" class="fa-pull-right" style="width: 200px;margin-bottom: 20px" @change="getLists()" placeholder="请输入您想查找的内容"></el-input>
      <el-table
        :data="tableData.list"
        border
        style="width: 100%">
        <el-table-column
          prop="username"
          label="用户"
          width="180">
        </el-table-column>
        <el-table-column
          prop="createDate"
          label="上传日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="dataKey"
          label="dataKey">
        </el-table-column>
        <el-table-column
          prop="appName"
          label="APP">
        </el-table-column>
        <el-table-column
          prop="fileName"
          label="文件名称">
        </el-table-column>
        <el-table-column
          prop="projectName"
          label="projectName">
        </el-table-column>
        <el-table-column
          prop="sampleName"
          label="sampleName">
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="tableData.pageNum"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="tableData.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.total">
      </el-pagination>
    </div>
</template>

<script>
  import {ReportService} from '../apis/ReportService'

  export default {
    name: 'report',
    data () {
      return {
        tableData: {},
        keyword: ''
      }
    },
    methods: {
      handleSizeChange (val) {
        this.getLists(1, val)
      },
      handleCurrentChange (val) {
        this.getLists(val, this.tableData.pageSize)
      },
      getLists(pageNum,pageSize){
        let params = {}
        params.pageNum = pageNum || 1
        params.pageSize = pageSize || null
        params.condition = this.keyword || null
        ReportService
          .list(params)
          .then(res => {
            this.tableData = res.data
            console.log(this.tableData, '666')
          })
      }
    },
    mounted: function () {
      let that = this
      ReportService
        .list()
        .then(res => {
          that.tableData = res.data
        })
    }
  }
</script>

<style scoped>

</style>
