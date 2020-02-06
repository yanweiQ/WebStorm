var add = function (x,y) {
    return x + y;
};

var add2= function (x,y) {
    return x + y + 2;
};

//表示让别人 或者同意让别人导出
module.exports.add = add;
module.exports.add = add2;
// moduel.exports = {add, add2};  如果有多个方法可以使用此方法