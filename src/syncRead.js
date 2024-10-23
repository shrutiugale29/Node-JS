const fs = require("fs");

// Synchronous read
const data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());