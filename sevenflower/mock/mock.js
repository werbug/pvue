var indexlist = require('./indexlist.json');
var details = require('./details.json');
var Llist = require('./l-list.json');
var LlistMore = require('./l-list-more.json');

module.exports = function() {
    return {
        "indexlist": indexlist,
        "details":details,
        "list": Llist,
        "listmore": LlistMore
    }
}

// restful
