/* lesson 03-04 */

var test = {

  createTitle: function(title) {
    var div = document.createElement('div');
    div.className = "well center";
    div.appendChild(document.createTextNode(title));
    return div;
  },

  createAnswerItem: function(item) {
    var li = document.createElement('li');
    li.innerHTML = '\
      <div class="checkbox">\
        <label>\
          <input type="checkbox">' +
          item +
        '</label>\
      </div>';
    return li;
  },

  createTestItem: function(item) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(item.question));
    var ul = document.createElement('ul');
    for (var i = 0; i < item.answers.length; i++) {
      ul.appendChild(this.createAnswerItem(item.answers[i]));
    }
    li.appendChild(ul);
    return li;
  },

  createCheckButton: function() {
    var div = document.createElement('div');
    div.className = "center";
    div.innerHTML = '\
      <button type="button" class="btn btn-default btn-lg active">\
        Проверить мои результаты\
      </button>';
    return div;
  },

  show: function(data) {
    document.body.appendChild(this.createTitle(data.title));
    var ol = document.createElement('ol');
    for (var i = 0; i < data.items.length; i++) {
      ol.appendChild(this.createTestItem(data.items[i]));
    }
    document.body.appendChild(ol);
    document.body.appendChild(this.createCheckButton());
  }
}

var testData = {
  title: 'Тест по программированию',
  items: [
    {
      question: 'Вопрос №1',
      answers: [
        'Вариант ответа №1',
        'Вариант ответа №2',
        'Вариант ответа №3'
      ],
      rightIndex: 2
    }, {
      question: 'Вопрос №2',
      answers: [
        'Вариант ответа №1',
        'Вариант ответа №2',
        'Вариант ответа №3'
      ],
      rightIndex: 0
    }, {
      question: 'Вопрос №3',
      answers: [
        'Вариант ответа №1',
        'Вариант ответа №2',
        'Вариант ответа №3'
      ],
      rightIndex: 1
    }
  ]
};

test.show(testData);
