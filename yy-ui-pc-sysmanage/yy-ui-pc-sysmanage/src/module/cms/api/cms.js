import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.yyApiUrlPre;

//页面查询
export const page_list=(page,size,params)=>{
  //请求你服务器端的页面查询接口
  let queryString = querystring.stringify(params);
  return http.requestQuickGet(apiUrl+'/cms/page/list/'+page+'/'+size+"?"+queryString);
};


