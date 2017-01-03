var common = {
  render: function (str) {
    var body = document.body;
    body.innerHTML = str + body.innerHTML;
  }
}

var page = {
	render:function (str){
		var contentWrapper = document.getElementById("contentWrapper");
		contentWrapper.innnerHTML = str;		
	}
}

module.exports.common = common;
module.exports.page = page;
