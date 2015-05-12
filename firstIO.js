var fs = require('fs')

var str = fs.readFileSync(process.argv[2]);
var lines = str.toString().split('\n').length - 1;
console.log(lines);