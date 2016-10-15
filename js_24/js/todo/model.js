define(

  [
    "pubsub"
  ],

  PubSub => function Model(data) {

    'use strict';

    data = data || [];
    let done = 0;
    data.forEach(item => {if (item.done) done++});

    this.getItems = () => data;

    this.getStatus = () => {
      let total = data.length;
      return {total, done, promotion: total ? total === done ? 'Вы молодец!' : '' : 'Займитесь хоть чем-нибудь!'};
    }

    this.appendItem = title => {
      if (title) {
        let item = {title};
        data.push(item);
        PubSub.publish('appendItem', item);
      }
    }

    this.removeItem = index => {
      if (data[index].done) done--;
      data.splice(index, 1);
      PubSub.publish('removeItem', index);
    }

    this.changeTitle = (index, value) => {
      let item = data[index];
      if (value) item.title = value;
      PubSub.publish('changeTitle', {index, item});
    }

    this.changeState = (index, value) => {
      let item = data[index];
      item.done = value;
      if (value) done++; else done--;
      PubSub.publish('changeState', {index, item});
    }

  }

);
