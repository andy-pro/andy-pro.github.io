define(

  [
    "jquery",
    "todo/model",
    "todo/view",
    "todo/controller"
  ],

  ($, Model, View, Controller) => {

    $(() => {

      let model = new Model([
        { title: 'Вынести мусор', done: true },
        { title: 'Купить хлеб' },
        { title: 'Завоевать мир' }
      ]);

      let view = new View(model);

      new Controller(model, view);

    });

  }

);
