const fs = require('fs');

module.exports = function(done, fileName) {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      done('Something went wrong!');
    } else {
      done(data);
    }
  });
};
