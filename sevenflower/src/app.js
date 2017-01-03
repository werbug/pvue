
require('./styles/usage/app.scss');

var modu = require('./scripts/utils/util.common.js');

var html = require('./scripts/tpls/index.html');

modu.common.render(html);

require('./scripts/views/index.js');


var list = require('./scripts/tpls/list.html');

modu.page.common.render(list);

require('./scripts/views/detail.js');







