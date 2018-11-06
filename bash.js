const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
const curl = require('./curl.js');

const done = output => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
};

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data
    .toString()
    .trim()
    .split(' ');
  if (cmd[0] === 'pwd') {
    pwd(done);
  }
  if (cmd[0] === 'ls') {
    ls(done);
  }
  if (cmd[0] === 'cat') {
    cat(done, cmd[1]);
  }
  if (cmd[0] === 'curl') {
    curl(done, cmd[1]);
  }
});
