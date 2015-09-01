/**
 * Handlebars Helper: {{markdown-it}}
 * Copyright Michiel De Mey (c) 2015
 */

module.exports.register = function (Handlebars, options, params) {

  'use strict';

  var md = require('markdown-it')({
    html: true
  });

  var assemble = params.assemble;
  var grunt = params.grunt;
  var opts = options || {};

  /**
   * {{markdown-it}}
   */
  Handlebars.registerHelper('markdown-it', function(options) {
    return md.render(options.fn(this));
  });

};
