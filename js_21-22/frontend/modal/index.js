/** simple modal jquery plugin

  usage:
    add to js:
      import './modal';
    add to html:
      include ./modal/index

  usage:
    $('.modal').modal(); // setup
    $('.modal').modal('show', options);
      options:
        title - modal title, html code possible
        body - body content, html code possible
        titleOk - OK-button caption, default 'OK'
        actionOk - callback, perform when OK-button pressed
    $('.modal').modal('hide'); call 'hide' from code, e.g. after timeout
*/

import './index.scss';

(() => {

  'use strict';

  let methods = {

    init: function() {
      this.find('[data-action]').on('click', e => {
        methods.hide.call(this);
        if ($(e.target).data().action === 'ok') this.data().actionOk();
        return false;
      });
      return this;
    },

    show: function({title, body, titleOk='OK', actionOk}) {
      $('body').addClass('modal__open')
        .on('click.modal keydown.modal', e => {
          if (e.target === this[0] || e.keyCode == 27 || e.keyCode == 13) {
            methods.hide.call(this);
            if (e.keyCode == 13) this.data().actionOk();
            return false;
          }
        });
      this.find('.modal__title').html(title);
      this.find('.modal__body').html(body);
      this.find('[data-action=ok]').text(titleOk);
      return this.fadeIn('fast').data('actionOk', actionOk || function(){});
    },

    hide: function() {
      return this.fadeOut('fast', function() {
        $('body').removeClass('modal__open').off('.modal');
      });
    }

  };

  $.fn.extend({
    modal: function(method) {
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
