var GoogleSearch = require('wko-google-search');
var config = require('../conf/keys');
var _ = require('underscore');

var googleSearch = new GoogleSearch({
  key: config.apiKey,
  cx: config.cseid
});

var query = 'roflcopter';

function giphor(query, cb) {
  googleSearch.build({
    q: query,
    start: 1,
    fileType: 'gif',
    num: 10
  }, function(error, response) {
    console.log(_.pluck(_.pluck(response.items, 'pagemap'), 'cse_image'));

    var image = _.first(_.first(response.items).pagemap.cse_image);
    cb(error, image);
  });
}

module.exports = giphor;
