define(

  [
    "jquery",
    "pubsub",
    "lib/resig.tmpl.mod",
    "todo/view.templates",
    "lib/jquery.checkbox"
  ],

  ($, PubSub, tmpl, templates) => function View(model) {

    'use strict';

    const dom = this.dom = {};

    templates.main = tmpl(templates.main);
    templates.list = tmpl(templates.list);

    setupView();

    delete templates.main;

    function setupView() {
      let main = $(templates.main({}));
      $('#target').html(main);
      dom.form = main.find('form');
      dom.input = dom.form.find('input');
      dom.list = main.find('ul').html(templates.list({items: model.getItems()}));
      dom.status = main.find('[class*=status]');
      setupList();
    }

    function setupList() {
      dom.images = dom.list.find('.jq-checkbox').checkbox().find('.jq-checkbox__img');
      dom.titles = dom.list.find('.todo__title');
      renderStatus();
    }

    function renderStatus() {
      let status = model.getStatus();
      dom.status.html(
        'Всего дел: <b>' + status.total +
        ', </b>завершенных: <b>' + status.done + '</b>. ' + status.promotion
      );
    }

    PubSub.subscribe('appendItem', (msg, item) => {
      dom.list.append(templates.list({items: [item]}));
      setupList();
    });

    PubSub.subscribe('removeItem', (msg, index)=> {
      dom.list.find('li').eq(index).remove();
      setupList();
    });

    PubSub.subscribe('changeTitle', (msg, data) => {
      dom.titles.eq(data.index).val(data.item.title);
    });

    PubSub.subscribe('changeState', (msg, data) => {
      dom.titles.eq(data.index).attr('class', `todo__title ${data.item.done ? 'todo__title--done' : ''}`);
      dom.images.eq(data.index).attr('title', data.item.done ? 'Продолжить' : 'Завершить');
      renderStatus();
    });

  }

);
