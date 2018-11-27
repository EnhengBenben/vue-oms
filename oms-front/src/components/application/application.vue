<template>
  <div class="ibox">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>应用管理</el-breadcrumb-item>
      <el-breadcrumb-item>基础信息管理</el-breadcrumb-item>
      <el-button type="primary" class="pull-right" size="small" @click="toEdit()">新增</el-button>
    </el-breadcrumb>
    <el-row>
      <el-input style="width: 220px;margin-top: 10px;margin-bottom: 20px" v-model="params.appName"
                placeholder="搜索应用名称／客户名称" class="pull-right" @change="getLists()"></el-input>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8" v-for="data in lists.list" :key="data.appId">
        <div class="parent-box">
          <div class="application-box">
            <div class="icon-status"><span>{{data.offLine === 0?'已上线':'已下线'}}</span></div>
            <div class="flex-row" style="min-height: 120px">
              <img src="../../assets/logo.png" alt="">
              <div class="flex-col">
                <h5>{{data.appName}}</h5>
                <p class="card-description-p1">
                  {{data.companyName}}
                </p>
                <p class="card-description-p2">{{data.createDate}}</p>
              </div>
            </div>
            <div class="flex-row" style="justify-content: center">
              <span class="version">V 2.3.3</span>
              <a @click="toEdit(data.appId)">修改</a>
              <a @click="changeLine(data)">{{data.offLine === 0?'下线':'上线'}}</a>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="lists.pageNum"
      :page-size="lists.pageSize"
      layout="total, prev, pager, next, jumper"
      :total="lists.total">
    </el-pagination>
  </div>
</template>

<script>
  import {ReportService} from '../../apis/ReportService'
  import {timeCSTHST} from '../../lib/moments'
  export default {
    name: 'application',
    data () {
      return {
        lists: {},
        appName: '',
        params: {
          appName: ''
        }
      }
    },
    methods: {
      handleCurrentChange: function (val) {
        this.getLists(val, this.lists.pageSize)
      },
      getLists(pageNum,pageSize){
        let params = {}
        params.pageNum = pageNum || 1
        params.pageSize = pageSize || null
        params.appName = this.params.appName || null
        ReportService
          .application(params)
          .then(res => {
            this.lists = res.data
            this.lists.list.map(data => {
              data.createDate = timeCSTHST(data.createDate)
              return data
            })
          })
      },
      toEdit: function (appId) {
        this.$router.push({
          path: '/app/application/edit',
          query: {
            appId: appId
          }
        })
      },
      changeLine: function (data) {
        let path = (data.offLine === 0 ? 'off' : 'on')
        ReportService
          .changeLine(data.appId, path)
          .then(res => {
            this.getLists(this.lists.pageNum, this.lists.pageSize)
          })
      }
    },
    mounted: function () {
      let that = this
      ReportService
        .application()
        .then(res => {
          that.lists = res.data
          that.lists.list.map(data => {
            data.createDate = timeCSTHST(data.createDate)
            return data
          })
        })
    }
  }
</script>

<style scoped lang="scss">
  .parent-box{
    background-color: #FFF;
    position: relative;
  }
  .application-box {
    min-height: 150px;
    margin-bottom: 10px;
    position: relative;
    padding: 10px;
    .icon-status {
      width: 0;
      height: 0;
      position: absolute;
      border-left: 40px solid transparent;
      border-right: 40px solid transparent;
      border-bottom: 40px solid #ddd;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      top: -6px;
      right: -26px;
      span {
        font-size: 12px;
        position: absolute;
        display: inline-block;
        width: 100px;
        top: 20px;
        margin-left: -18px;
      }
    }
    .flex-row {
      display: flex;
      span.version{
        width: 33.33%;
        text-align: center;
      }
      a{
        width: 33.33%;
        text-align: center;
      }
      img {
        width: 66px;
        height: 66px;
      }
      .flex-col {
        width: calc(100% - 66px);
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        padding-right: 20px;
        h5 {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          overflow: hidden;
          font-size: 16px;
          /*! autoprefixer: off */
          -webkit-box-orient: vertical;
        }
      }
    }
  }
</style>
