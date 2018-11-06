const fs = require('fs');

module.exports = function(fileName) {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
      // process.stdout.write('prompt >');
    }
  });
};
