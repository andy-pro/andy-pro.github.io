/*! simple flash jquery plugin */
/**
  usage example:
  $('#flash').flash(); // setup
  $.flash('message', 2); // show message during 2 sec.
  $.flash('message'); // show message infinitely
  $.flash(); // close flash
*/

import './index.scss';

(() => {

  'use strict';

   $.fn.extend({
    flash: function() {
      let content = this.find('span');
      let close = () => this.clearQueue().slideUp('slow');
      this.find('.close').on('click.flash', close);
      $.flash = (msg, timeout) => {
        if (msg) {
          content.html(msg);
          this.slideDown('slow');
          if (timeout)
            this.queue(() => this
              .delay(timeout * 1000)
              .slideUp('slow')
              .dequeue()
            );
        } else close();
      };
    }
  });

}).call(this);

/* end simple flash jquery plugin */
