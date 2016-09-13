/* lesson 13 */

'use strict';

$(function() {

  var test_data = {
    title: 'Тест по HTML',
    items: [
      {
        question: 'Какие основные языки программирования используются во фронтенд-разработке?',
        answers: [
          'xml',
          'css',
          'javascript',
          'flash',
          'html',
          'typescript'
        ],
        right: [1, 2, 4]
      }, {
        question: 'Что будет если добавить атрибут target="_blank" ссылке',
        answers: [
          'Ссылка будет открываться в новом окне',
          'Ссылка не будет открываться',
          'Ссылка будет открываться в новой вкладке',
          'Ссылка открываться будет в новом браузере'
        ],
        right: [2]
      }, {
        question: 'Для чего предназначен тег <p>',
        answers: [
          'Выделение жирным текстом',
          'Абзац текста',
          'Подчеркивает важность контента',
          'Структурный элемент разметки'
        ],
        right: [1]
      }, {
        question: 'Выберите тег без ошибок',
        answers: [
          '<img url="cat.jpg" />',
          '<div class=some class></div>',
          '<div class="box"></div>',
          '<input name="name">',
          '<img src="cat.jpg"></img>'
        ],
        right: [2, 3]
      }
    ]
  };

  // $.leaks.watch();

  localStorage['test_data'] = JSON.stringify(test_data);

  var test_fn = _.template(test_tmpl.innerHTML),
      test_data_str = localStorage['test_data'],
      $test_form = $('#test_form');

  $test_form.data('test_data', JSON.parse(test_data_str));
  $test_form.submit({oncheck: renderTest}, checkTestAnswers);

  renderTest($test_form);

  $('.modal').modal();

  function renderTest($el) {
    // $el[0].innerHTML = ''; // uncomment this for jquery memory leaks
    var test_data = $el.data('test_data');
    $el.html( test_fn(test_data) );
    $('.jq-checkbox').checkbox();
    // jquery3, were cache?
    // if ($.cache) console.log('$.cache length:', Object.keys($.cache).length);
  }

  function checkTestAnswers(e) {

    var $self = $(this),
        test_data = $self.data('test_data'),
        answers = $self.serializeArray(),
        answers_array = [];

    // convert [objects] to [arrays]
    _.forEach(answers, function(value) {
      var item = value.name.split('_');
      var q = parseInt(item[0]); // номер вопроса
      answers_array[q] = answers_array[q] || [];
      answers_array[q].push(parseInt(item[1])); // номер ответа;
    });

    // все вопросы имеют одинаковый вес из 100% общего результата,
    // ответы также имеют одинаковый вес из 100% одного вопроса,
    // при этом правильный ответ добавляет свой вес, неправильный - отнимает
    var result = 0;
    _.forEach(test_data.items, function(item, index) {
      var dif = _.xor(item.right, answers_array[index]).length,
          right = item.right.length;
      result += Math.max((right-dif) / right, 0);
    });
    result = (result / test_data.items.length * 100).toFixed(2).replace(/[.,]00$/, "");

    if (typeof e.data.oncheck === 'function') {
      e.data.oncheck($self);
    }

    $('.modal').modal(
      'show',
      'Результаты теста',
      'Ваш результат: ' + result + ' %',
      'Отправить',
      // send answers to server, if you want (;-)
      function() {
        console.log({
          result: result,
          answers: $.param(answers)
        });
      }
    );

    return false;

  }

});

/* modal plugin */
(function($) {

  var methods = {

    init: function() {
      var self = this;
      $('body').on('click keydown', function(e) {
        var k = e.keyCode;
        if (e.target === self[0] || k == 27 || k == 13) {
          methods.hide.call(self);
          if (k == 13) self.data().action_ok();
        }
      });
      this.find('[data-action]').on('click', function() {
        methods.hide.call(self);
        if ($(this).data().action === 'ok') self.data().action_ok();
        return false;
      });
      return this;
    },

    show: function(title, body, title_ok, action_ok) {
      $('body').addClass('modal-open');
      this.find('.modal-title').text(title);
      this.find('.modal-body').text(body);
      this.find('[data-action=ok]').text(title_ok);
      return this.fadeIn('fast').data('action_ok', action_ok || function(){});
    },

    hide: function() {
      return this.fadeOut('fast', function() {
        $('body').removeClass('modal-open');
      });
    }

  };

  $.fn.modal = function(method){
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
        $.error('Method ' +  method + ' not exist!');
    }
  }

})(jQuery);

/* checkbox plugin */
(function($) {

  $.fn.checkbox = function() {
    this.each(function() {
      // bind events to labels
      $(this).on('mouseover mouseout focusin focusout', function(e) {
        var checkbox = this.children[0];
        $(checkbox).data('hover', e.type === 'mouseover' || e.type === 'focusin');
        setCheckboxImage.call(checkbox);
      });
      // setup checkboxes
      $(this.children[0])
        // shortcut to <span>
        .data('image', this.children[1])
        .on('change', setCheckboxImage);
      setCheckboxImage.call(this.children[0]);
    });
  }

  function setCheckboxImage() {
    var self = $(this),
        pos = 0;
    if (self.prop('checked')) pos += 17;
    if (self.prop('disabled')) pos += 68;
    else if (self.data('hover')) pos += 34;
    $(self.data('image')).css("background-position","0 -" + pos + "px");
  }

})(jQuery);
