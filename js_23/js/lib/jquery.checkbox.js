define(["jquery"], function($) {

  // checkbox jquery plugin

  'use strict';

  let methods = {

    init: function() {
      return this.each(function() {
        // bind events to labels
        $(this).on('mouseover mouseout focusin focusout', function(e) {
          let checkbox = this.children[0];
          $(checkbox).data('hover', e.type === 'mouseover' || e.type === 'focusin');
          setCheckboxImage.call(checkbox);
        });
        // setup checkboxes
        let cb = this.children[0];
        $(cb)
          .data('image', this.children[1])
          .on('change', setCheckboxImage);
        setCheckboxImage.call(cb);
      });
    },

    reset: function() {
      return this.each(function() {
        let cb = this.children[0];
        $(cb).prop('checked', false);
        setCheckboxImage.call(cb);
      });
    }

  };

  function setCheckboxImage() {
    let cb = $(this),
        pos = 0;
    if (cb.data('hover')) pos += 29;
    if (cb.prop('checked')) pos += 58;
    $(cb.data('image')).css("background-position", `0 -${pos}px`);
  }

  $.fn.extend({
    checkbox: function(method) {
      if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof method === 'object' || !method) {
        return methods.init.apply(this, arguments);
      } else {
          $.error('Method ' +  method + ' not exist!');
      }
    }
  });


});
