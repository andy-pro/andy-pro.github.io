define(

  [
    "jquery",
    "lib/resig.tmpl",
    "lib/jquery.checkbox"
  ],

  function($, tmpl) {

    return function View(model) {

      'use strict';

      var self = this;

      function init() {
        var $main = $(tmpl('mainTmpl', {}));
        $('#target').html($main);
        self.elements = {
          form: $main.find('form'),
          list: $main.find('ul'),
          status: $main.find('[class*=status]')
        };
        self.elements.input = self.elements.form.find('input');
        self.renderList(model.getItems());
      }

      this.renderList = function(items) {
        var list = tmpl('listTmpl', {items: items});
        this.elements.list.html(list).find('.jq-checkbox').checkbox();
        var status = model.getStatus();
        this.elements.status.html(
          'Всего дел: <b>' + status.total +
          ', </b>завершенных: <b>' + status.done + '</b>. ' + status.promotion
        );
      }

      init();

    }

  }

);
