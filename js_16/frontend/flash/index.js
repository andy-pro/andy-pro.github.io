/*! simple flash jquery plugin */
/**
  usage example:
  $('#flash').flash(); // setup
  $.flash('message', 2); // show message during 2 sec.
  $.flash('message'); // show message infinitely
  $.flash(); // close flash
*/

// 'es2015' version
module.exports = $ => {

  'use strict';

  $.fn.flash = function() {
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
  };

};

// 'classic' version
/*
(function($) {

  'use strict';

  $.fn.flash = function() {
    var self = this,
        content = this.find('span');
    this.find('.close').on('click', close);
    $.flash = function(msg, timeout) {
      if (msg) {
        content.html(msg);
        self.slideDown('slow');
        if (timeout) self.queue(function() {
          self.delay(timeout * 1000).slideUp('slow').dequeue();
        });
      } else close();
    }
    function close() {
      self.clearQueue().slideUp('slow');
    }
  }
})(jQuery);
*/

/* end simple flash jquery plugin */
