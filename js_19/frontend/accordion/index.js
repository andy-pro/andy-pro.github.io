/* simple accordion jQuery plugin */

import './index.scss';

(() => {

  'use strict';

  $.fn.extend({
    accordion: function() {

      // prevent multiple closure creating
      if (this.data('accordion')) return;

      // get headers
      var headers = this.find('.accordion__header');
      // write any value, e.g. count
      this.data('accordion', headers.size());

      // get paragraphs and bind event handlers to headers
      var parags = headers.on('click.accordion', function() {
        // index of current header
        var idx = headers.index(this);
        var hprev = headers.filter('.accordion__active').removeClass('accordion__active');
        // index of previous header
        var iprev = headers.index(hprev);
        parags.eq(iprev).slideUp();
        // slide down another paragraph only
        if (iprev !== idx) {
          $(this).addClass('accordion__active');
          parags.eq(idx).slideDown();
        }
      }).next();

    }
  });

}).call(this);
