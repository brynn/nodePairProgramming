const request = require('request');

module.exports = function(done, url) {
  request(url, function(err, response, body) {
    if (err) {
      done('Something went wrong!');
    } else {
      done(body);
    }
  });
};
