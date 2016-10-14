define(

  [
    "jquery",
    "todo/model",
    "todo/view",
    "todo/controller"
  ],

  function($, Model, View, Controller) {

    $(function() {

      var model = new Model([
        { title: 'Вынести мусор' },
        { title: 'Купить хлеб' },
        { title: 'Завоевать мир' }
      ]);

      var view = new View(model);

      new Controller(model, view);

    });

  }

);
