/* simple slider jQuery plugin */

import './index.scss';

(() => {

  'use strict';

  let defaults = {
    speed: 400
  };

  let methods = {

    init: function(params) {
      let self = this;
      params = params || {};

      this.find('.slider__prev, .slider__next')
        .on('click.slider', e => !methods.slide.call(this, /__next/.test(e.target.className), e));
      this.find('.slider__shot a')
        .on('click.slider', function(e) {
          methods.slide.call(self, $(this).index(), e);
          return false;
        });

      (() => {
        let imgs = this.find('img');
        this.data('slider', $.extend(
          {
            width: imgs.width(), // from first <img>
            index: 0,
            last: imgs.length - 1,
            tape: this.find('.slider__tape'),
            shots: this.find('.slider__shot a')
          },
          defaults,
          params
        ));
      })();

      if (params.keycontrol) {
        $('body').on('keydown.slider', e => {
          if (e.keyCode == 39) { // right arrow
            methods.slide.call(this, true, e);
            return false;
          } else
          if (e.keyCode == 37) { // left arrow
            methods.slide.call(this, false, e);
            return false;
          }
        });
      }

      methods.slide.call(this, 0);

      return this;
    },

    slide: function(next, e) {
      /** 'next':
          if boolean:
            true  - slide to right
            false - slide to left
          if number - slide to image with this index
      */
      var self = this,
          options = this.data('slider'),
          i = options.index;

      if (!options.animate) {

        var tape = options.tape;
        if (typeof next === 'boolean') {
          if (next) {
            if (++i > options.last) i = 0;
            slide_forward(1);
          } else {
            if (--i < 0) i = options.last;
            slide_backward(1);
          }
        } else if (typeof next === 'number' && (next !== i)) {
          if (next > i)
            slide_forward(next - i);
          else
            slide_backward(i - next);
          i = next;
        }

        options.shots.eq(options.index).removeClass('slider__active');
        options.shots.eq(i).addClass('slider__active');

        options.index = i;

      }

      return this;

      function slide_forward(count) {
        animate_start();
        tape.animate(
          {'margin-left': '-=' + options.width * count},
          options.speed,
          function() {
            for (var i = 0; i < count; i++)
              tape.children().first().detach().appendTo(tape);
            tape.css('margin-left', 0);
            animate_complete();
          }
        );
      }

      function slide_backward(count) {
        animate_start();
        for (var i = 0; i < count; i++)
          tape.children().last().detach().prependTo(tape);
        var ml = options.width * count;
        tape.css('margin-left', 0 - ml).animate(
          {'margin-left': '+=' + ml},
          options.speed,
          animate_complete
        );
      }

      function animate_start() {
        options.animate = true;
        if (typeof options.onSlide === 'function') {
          options.onSlide.call(self, next, e);
        }
      }

      function animate_complete() {
        options.animate = false;
        if (typeof options.onAfterSlide === 'function') {
          options.onAfterSlide.call(self, next, e);
        }
      }

    }

  };

  $.fn.extend({
    slider: function(method){
      if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof method === 'object' || !method) {
        return methods.init.apply(this, arguments);
      } else {
          $.error('Method ' +  method + ' not exist!');
      }
    }
  });

}).call(this);
