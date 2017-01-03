
require('./styles/usage/app.scss');

var common = require('./scripts/utils/util.common.js');

//分类
//var classify = require('./scripts/tpls/classify.html');

//common.render(classify);

//列表
var list = require('./scripts/tpls/list.html');

common.render(list);

//详情
//var cart = require('./scripts/tpls/cart.html');
//
//common.render(cart);

//帮助
//var help = require('./scripts/tpls/help.html');
//
//common.render(help);

require('./scripts/views/detail.js');


