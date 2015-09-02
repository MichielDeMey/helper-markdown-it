/**
 * Handlebars Helper: {{markdown-it}}
 * Copyright Michiel De Mey (c) 2015
 */

'use strict';

var MarkdownIt = require('markdown-it');

module.exports.register = function (Handlebars, options, params) {
  var opts =  options['markdown-it'] || null;
  var md = new MarkdownIt('default', opts);

  /**
   * {{markdown-it}}
   */
  Handlebars.registerHelper('markdown-it', function(options) {
    return md.render(options.fn(this));
  });

};
