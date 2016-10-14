define(

  [
    "jquery"
  ],

  function($) {

    return function Controller(model, view) {

      'use strict';

      view.elements.form.submit(addItem);

      view.elements.list.on('click.todo change.todo', 'li', function(e) {
        var index = $(this).index(),
            element = $(e.target);
        switch (e.type) {
          case 'click':
            if (element.hasClass('close')) removeItem.call(element, e, index);
            break;
          case 'change':
            if (element.hasClass('todo__state')) changeState.call(element, e, index);
            else if (element.hasClass('todo__item')) changeTitle.call(element, e, index);
        }
      });

      function addItem() {
        var input = view.elements.input;
        view.renderList(model.addItem(input.val()));
        input.val('');
        return false;
      }

      function removeItem(e, index) {
        view.renderList(model.removeItem(index));
      }

      function changeState(e, index) {
        view.renderList(model.changeItem(index, 'state', this.prop('checked') ? 'done': 'pending'));
      }

      function changeTitle(e, index) {
        view.renderList(model.changeItem(index, 'title', this.val()));
      }

    }

  }

);
