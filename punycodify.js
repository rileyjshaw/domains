#!/usr/bin/env node
var puny = require('punycode');

require('cli').withStdinLines(function(lines, newline) {
    this.output(lines.map(function (emoji) {
      return 'xn--' + puny.encode(emoji) + ' ' + emoji;
    }).join(newline));
});
