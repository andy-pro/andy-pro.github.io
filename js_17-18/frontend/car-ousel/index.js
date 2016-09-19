/* Car-Ousel jQuery plugin */

(function($) {

  var defaults = {
    speed: 400
  };

  var methods = {

    init: function(params) {
      var self = this;
      defaults.width = this.find('img').width(); // from first <img>
      this.data({
        options: $.extend({}, defaults, params),
        tape: this.find('.car-ousel__tape')
      });
      this.find('.car-ousel__prev, .car-ousel__next')
        .on('click.carOusel', function(e) {
          methods.slide.call(self, /__next/.test(e.target.className));
          return false;
        });
      if (params && params.keycontrol) {
        $('body').on('keydown', function(e) {
          if (e.keyCode == 39) {  // right arrow
            methods.slide.call(self, true);
            return false;
          } else
          if (e.keyCode == 37) {  // left arrow
            methods.slide.call(self);
            return false;
          }
        });
      }
      return this;
    },

    slide: function(next) {
      var options = this.data('options');
      if (!options.animate) {
        options.animate = true;
        var tape = this.data('tape');
        if (next) {
          tape.animate(
            {'margin-left': '-=' + options.width},
            options.speed,
            function() {
              tape.children().first().detach().appendTo(tape);
              tape.css('margin-left', 0);
              options.animate = false;
            }
          );
        } else {
          tape.children().last().detach().prependTo(tape);
          tape.css('margin-left', 0 - options.width).animate(
            {'margin-left': '+=' + options.width},
            options.speed,
            function() {
              options.animate = false;
            }
          );
        }
      }
      return this;
    }

  };

  $.fn.carOusel = function(method){
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
        $.error('Method ' +  method + ' not exist!');
    }
  }

})(jQuery);
