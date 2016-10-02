/* simple title-shower jQuery plugin */

module.exports = $ => {

  'use strict';

  let font;

  const threshold = 40; // remove small steps
  const speed = 'fast'; // animation speed
  let appearance = 2000; // appearance time

  let methods = {

    init: function(params) {
      let self = this,
          titles = $(params.titles).find('.title-shower__title'),
          pd = 2 * parseInt(titles.find('.title-shower__text').css('padding-left'));
      font = titles.css('font-size') + ' ' + titles.css('font-family');

      titles.each(function() {
        let title = $(this);
        let words = title
              .find('.title-shower__text')
              .text().toUpperCase().split(' '),
            wow = words.map(getTextWidth), // get width of words
            w1 = Math.max(wow[0], wow[1]),
            w2 = Math.max(wow[1], wow[2]);
        if (Math.abs(w1 - w2) < threshold) w1 = w2 = Math.max(w1, w2);
        let ground = title.find('.title-shower__ground');
        ground.eq(0).width(w1 + pd);
        ground.eq(1).width(w2 + pd);
      });

      params = {
        titles,
        index: 0,
        last: titles.length - 1
      };

      this.data('titleShower', $.extend({}, params));

      methods.show.call(this, 0);

      appearance = speed;

      return this;
    },

    show: function(next) {
      /** 'next':
          if boolean:
            true  - show next title, hide current
            false - show previous title, hide current
          if number - show title with this index, hide previous
      */
      let options = this.data('titleShower'),
          i = options.index;

      if (typeof next === 'boolean') {
        options.titles.eq(i).fadeOut(appearance);
        if (next) { if (++i > options.last) i = 0; }
        else { if (--i < 0) i = options.last; }
        options.titles.eq(i).fadeIn(appearance);
        options.index = i;
      } else if (typeof next === 'number') {
        options.titles.eq(next).fadeIn(appearance);
        if (next != i) {
          options.titles.eq(i).fadeOut(appearance);
          options.index = next;
        }
      }

      return this;
    }

  };

  $.fn.titleShower = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' not exist!');
    }
  };

  function getTextWidth(text){
    let canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var ctx=canvas.getContext('2d');
    ctx.font = font;
    return ctx.measureText(text).width;
  }

};
