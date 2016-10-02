/* simple plugin_name jQuery plugin */

'use strict';

// don't forget add 'externals: { jquery: '$' }' to webpack config
var $ = require("jquery");

const plugin_name = 'titleShower';

var defaults = {
  // default options
};

var methods = {

  init: function(params) {

    var self = this;

    this.data(plugin_name, $.extend(
      {},
      defaults,
      params
    ));

    return this;
  },

  method1_name: function(args) {

    var self = this,
        options = this.data(plugin_name);

    return this;

  }

};

$.fn[plugin_name] = function(method){
  if (methods[method]) {
    return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
  } else if (typeof method === 'object' || !method) {
    return methods.init.apply(this, arguments);
  } else {
      $.error('Method ' +  method + ' not exist!');
  }
};

/* no module exports */
