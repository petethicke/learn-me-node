var modMod = require('./modularModule.js')
var dir = process.argv[2]
var filter = process.argv[3]

modMod(dir, filter, function (err, list) {
  if (err) {
    return console.error('There was an error: ', err);
  }
  list.forEach(function(file) {
    console.log(file);
  });
});