//导入model.js文件
var {add} = require("./model01");
var Vue = require("./vuejs-2.5.16");


/*编写MVVM中的model部分以及VM（view model）部分*/
var vm = new Vue({
    el:"#app",//接管了app区域的管理
    data:{//model数据
        name:"优越教育",
        num1:0,
        num2:0,
        result:0,
        url:"www.baidu.com",
        size:50
    },
    methods:{
        change:function () {
            this.result = add(Number.parseInt(this.num1),Number.parseInt(this.num2));
        }
    }

});