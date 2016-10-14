define(function() {

  return function Model(data) {

    'use strict';

    data = data || [];

    this.getItems = function() {
      return data;
    }

    this.getStatus = function() {
      var total = data.length,
          done = 0;
      for (var i = 0; i < total; i++) {
        done += Number(data[i].state === 'done');
      }
      return {
        total: total,
        done: done,
        promotion: total === done ? 'Вы молодец!' : ''
      };
    }

    this.addItem = function(title) {
      if (title) {
        data.push({
          title: title,
          state: 'pending'
        });
      }
      return data;
    }

    this.removeItem = function(index) {
      data.splice(index, 1);
      return data;
    }

    this.changeItem = function(index, key, value) {
      if (value) {
        data[index][key] = value;
      }
      return data;
    }

  }

});
