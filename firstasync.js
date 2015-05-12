var fs = require('fs')

fs.readFile(process.argv[2], function (err, str) {
  var lines = str.toString().split('\n').length - 1;
  console.log(lines);
});
