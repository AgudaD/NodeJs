const fs = require('fs')
const newline = fs.readFileSync(process.argv[2]).toString().split("\n").length;
console.log(newline-1);