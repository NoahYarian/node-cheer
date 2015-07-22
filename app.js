#!/usr/bin/env node

var args = [];

for (var i = 2; i < process.argv.length; i++) {
  args.push(process.argv[i]);
}

for (var j = 0; j < args.length; j++) {
  for (var k = 0; k < args[j].length; k++) {
    console.log("Give me " + getArticle(args[j][k]) + " " + args[j][k] + "!");
  }
}

console.log("What's that spell?\n" + args.join(' ') + "!!");

function getArticle(c) {
  return ("AEFHILMNORSX".indexOf(c.toUpperCase()) !== -1) ? "an" : "a";
}
