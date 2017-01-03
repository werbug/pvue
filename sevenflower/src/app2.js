require('./styles/usage/app.scss');

var common = require('./scripts/utils/util.common.js');
var html = require('./scripts/tpls/index.html');

common.render(html);

require('./scripts/views/index.js');
