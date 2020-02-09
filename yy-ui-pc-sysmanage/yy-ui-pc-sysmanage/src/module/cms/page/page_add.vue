<template>
  <div>
    <!--编写页面静态部分，即view部分-->
    新增页面..
    <el-form :model="pageForm" label‐width="80px" >
    <el-form-item label="所属站点" prop="siteId">
    <el-select v-model="pageForm.siteId" placeholder="请选择站点">
    <el-option
    v-for="item in siteList"
    :key="item.siteId"
    :label="item.siteName"
    :value="item.siteId">
    </el-option>
    </el-select>
    </el-form-item>
    <el-form-item label="选择模版" prop="templateId">
    <el-select v‐model="pageForm.templateId" placeholder="请选择">
    <el-option
    v-for="item in templateList"
    :key="item.templateId"
    :label="item.templateName"
    :value="item.templateId">
    </el-option>
    </el-select>
    </el-form-item>
    <el-form-item label="页面名称" prop="pageName">
    <el-input v-model="pageForm.pageName" auto-complete="off" ></el-input>
    </el-form-item>

    <el-form-item label="别名" prop="pageAliase">
    <el-input v-model="pageForm.pageAliase" auto-complete="off" ></el-input>
    </el-form-item>
    <el-form-item label="访问路径" prop="pageWebPath">
    <el-input v-model="pageForm.pageWebPath" auto-complete="off" ></el-input>
    </el-form-item>

    <el-form-item label="物理路径" prop="pagePhysicalPath">
    <el-input v-model="pageForm.pagePhysicalPath" auto-complete="off" ></el-input>
    </el-form-item>

    <el-form-item label="类型">
    <el-radio-group v-model="pageForm.pageType">
    <el-radio class="radio" label="0">静态</el-radio>
    <el-radio class="radio" label="1">动态</el-radio>
    </el-radio-group>
    </el-form-item>
    <el-form-item label="创建时间">
    <el-date-picker type="datetime" placeholder="创建时间" v‐model="pageForm.pageCreateTime">
    </el-date-picker>
    </el-form-item>
    </el-form>
    <div slot="footer" class="dialog‐footer">
      <el-button type="primary" @click="addSubmit" >提交</el-button>
    </div>
  </div>
</template>
<script>
  import ElButton from "../../../../node_modules/element-ui/packages/button/src/button";
  import ElTable from "../../../../node_modules/element-ui/packages/table/src/table";
  import ElPagination from "element-ui/packages/pagination/src/pagination";

  import * as cmsApi from '../api/cms'

  /*编写页面静态部分，即model及vm部分。*/
  export default{
    components: {
      ElPagination,
      ElTable,
      ElButton},
    data(){
          return{
            siteList:[],
            templateList:[],
            pageForm:{
              siteId:'',
              templateId:'',
              pageName: '',
              pageAliase: '',
              pageWebPath: '',
              pageParameter:'',
              pagePhysicalPath:'',
              pageType:'',
              pageCreateTime: new Date()

            }
          }
      },
    methods:{
        addSubmit:function () {
          alert("提交")
        }
    },
    mounted(){/*钩子方法*/
      created:function(){
      //初始化站点列表
        this.siteList = [
        {
          siteId:'5a751fab6abb5044e0d19ea1',
          siteName:'门户主站'
        },
        {
          siteId:'102',
          siteName:'测试站'
        }
      ]
    //模板列表
        this.templateList = [
        {
          templateId:'5a962b52b00ffc514038faf7',
          templateName:'首页'
        },
        {
          templateId:'5a962bf8b00ffc514038fafa',
          templateName:'轮播图'
        }
      ]
        }
    }

  }
</script>
<style>
  /*编写页面样式，不是必须*/

</style>
