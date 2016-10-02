'use strict';

/*! simple flash jquery plugin */

/**

  usage example:

  $('#flash').flash(); // setup

  $.flash('message', 2); // show message during 2 sec.

  $.flash('message'); // show message infinitely

  $.flash(); // close flash

*/

(function($) {

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

      self.slideUp('slow');

    }

  }

})(jQuery);



// (function($) {

//   $.fn.flash = function() {

//     var self = this,

//         timerId,

//         content = this.find('span');

//     this.find('.close').on('click', close);

//     $.flash = function(msg, timeout) {

//       clearTimeout(timerId);

//       if (timeout) timerId = setTimeout(close, timeout * 1000);

//       if (msg) {

//         content.html(msg);

//         self.fadeIn('slow');

//       } else close();

//     }

//     function close() {

//       clearTimeout(timerId);

//       self.fadeOut('slow', function() {

//         //content.empty();

//       });

//     }

//   }

// })(jQuery);

/* end simple flash jquery plugin */


$(function() {

  console.log('it is menu');

  $('.menu').on('click', function() {
    // console.log('clicks');
    $.flash('click', 4);
  });

});


$(function() {

  console.log('starting');
  $('#flash').flash(); // flash plugin setup

});
