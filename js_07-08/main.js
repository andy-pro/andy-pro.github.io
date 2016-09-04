/* lesson 07-08 */

var tabs_data_1 = {
  title: 'Tabs example 1',
  items: [
    {
      title: 'Nunc tincidunt',
      href: '#tab1',
      text: 'Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.'
    }, {
      title: 'Proin dolor',
      href: '#tab2',
      text: 'Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.'
    }, {
      title: 'Aenean lacinia',
      href: '#tab3',
      text: 'Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus. Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.'
    }
  ]
};

var tabs_data_2 = {
  title: 'Tabs example 2',
  items: [
    {
      title: 'Aenean lacinia',
      href: '#tab1',
      text: 'Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.'
    }, {
      title: 'Proin dolor',
      href: '#tab2',
      text: 'Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.'
    }, {
      title: 'Dolor proin',
      href: '#tab3',
      text: 'Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus. Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.'
    }, {
      title: 'Nunc tincidunt',
      href: '#tab4',
      text: 'Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus. Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.'
    }
  ]
};

$(function() {

  var $tabs = $('.tabs');

  new Tabs($($tabs[0]), tabs_data_1)
    .on('click', function(e) {
      console.log('tabs1 header clicked: ', this, e);
    })
    .on('scroll', function(e) {
      console.log('tabs1 content scrolled: ', this, e);
    });

  new Tabs($($tabs[1]), tabs_data_2)
    .on('click', function(e) {
      console.log('tabs2 header clicked: ', this, e);
    });

  $('[data-toggle=tooltip]').each(function() {
    new Tooltip($(this))
    // add events, if necessary
    .on('show', function(e) {console.log(this, e);})
    .on('hide', function(e) {console.log(this, e);});
  });

});

/* === Tabs component === */
function Tabs($root, data) {

  // add some events to our component
  var onClick, onScroll;
  onClick = onScroll = function() {};

  $root.find('.tabs__header').text(data.title);

  var content = $root.find('.tabs__content').scroll(function(event) {
    onScroll.call(this, event);
  });

  var headers = addTabHeaders(data.items);
  headers[0].trigger('click');

  this.on = function(event, cb) {
    switch (event) {
      case 'click':
        onClick = cb;
        break;
      case 'scroll':
        onScroll = cb;
        break;
    }
    return this;
  };

  function addTabHeaders(items) {
    var $nav = $root.find('.tabs__nav'),
        headers = [];
    $.each(items, function() {
      headers.push($('<a>', {
        href: this.href,
        text: this.title
      }).click(clickHandler).appendTo($nav));
    });
    return headers;
  }

  function clickHandler(event) {
    var $el = $(this);
    if (!$el.hasClass('selected')) {
      var index = $el.index();
      $.each(headers, function(_index) {
        index == _index ? this.addClass('selected') : this.removeClass('selected');
      });
      content.fadeOut(150, function() {
        content.text(data.items[index].text).fadeIn(150);
      });
      onClick.call(this, event);
    }
    return false;
  }

}

/* === Tooltip component === */
function Tooltip($el) {

  // add some events to our component
  var onShow, onHide;
  onShow = onHide = function() {};

  var offset = $el.offset();
  offset.left += $el.width() + 12;

  var div = $('<div/>', {
    'class': 'tooltip',
    text: $el.attr('title'),
    css: offset
  }).appendTo('body');

  var anm_show = $el.attr('data-animation');
  var anm_speed = anm_show ? 'fast' : 0;
  var anm_hide = anm_show == 'fadeIn' ? 'fadeOut' : 'hide';
  anm_show = anm_show == 'show' | anm_show == 'fadeIn' ? anm_show : 'show';

  var timerId;
  var showed;

  $el.removeAttr('title')
    .on('mouseover focusin', function(event) {
      timerId = setTimeout(function() {
        onShow.call(div, 'show');
        div[anm_show](anm_speed);
        showed = true;
      }, 300);
    })
    .on('mouseout focusout', function() {
      clearTimeout(timerId);
      if (showed) {
        showed = false;
        onHide.call(div, 'hide');
        div[anm_hide](anm_speed);
      }
    });

  this.on = function(event, cb) {
    switch (event) {
      case 'show':
        onShow = cb;
        break;
      case 'hide':
        onHide = cb;
        break;
    }
    return this;
  };

}
