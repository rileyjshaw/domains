#!/usr/bin/env node
var chars = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
var a = [];

chars.forEach(function(char1) {
  chars.forEach(function(char2) {
    a.push(char1 + char2);
  });
});

console.log(a.join('\n'));
