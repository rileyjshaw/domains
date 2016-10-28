#!/usr/bin/env node
var puny = require('punycode');

require('cli').withStdinLines(function(lines, newline) {
    this.output(lines.filter(function (line) {return line;}).map(function (emoji) {
      return 'xn--' + puny.encode(emoji) + ' ' + emoji;
    }).join(newline));
});
