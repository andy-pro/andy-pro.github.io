define(

  [
    "jquery"
  ],

  $ => function Controller(model, view) {

    'use strict';

    view.dom.form.submit(() => {
      const input = view.dom.input;
      model.appendItem(input.val());
      input.val('');
      return false;
    });

    view.dom.list.on('click.todo change.todo', 'li', function(e) {
      const index = $(this).index(),
          el = $(e.target);
      switch (e.type) {
        case 'click':
          if (el.hasClass('close')) {
            model.removeItem(index);
          }
          break;
        case 'change':
          if (el.hasClass('todo__state')) {
            model.changeState(index, el.prop('checked'));
          }
          else if (el.hasClass('todo__title')) {
            model.changeTitle(index, el.val());
          }
      }
    });

  }

);
