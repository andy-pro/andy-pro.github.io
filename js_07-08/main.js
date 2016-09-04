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

  var tabs1 = new Tabs($($tabs[0]), tabs_data_1);
  tabs1.onClick = function(e) {
    console.log('tabs1 clicked: ', this, e);
  }
  tabs1.onScroll = function(e) {
    console.log('content1 scrolled: ', this, e);
  }

  var tabs2 = new Tabs($($tabs[1]), tabs_data_2);
  tabs2.onClick = function(e) {
    console.log('tabs2 clicked: ', this, e);
  }

  $('[data-toggle=tooltip]').each(function() {
    var tt = new Tooltip($(this));
    // add events, if necessary
    tt.onShow = function(e) {console.log(this, e);}
    tt.onHide = function(e) {console.log(this, e);}
  });

});

/* === Tabs component === */
function Tabs($root, data) {

  var self = this;

  // add some events to our component
  this.onClick = dummy;
  this.onScroll = dummy;

  $root.find('.tabs__header').text(data.title);

  var content = $root.find('.tabs__content').scroll(function(event) {
    self.onScroll.call(this, event);
  });

  var headers = addTabHeaders(data.items);
  headers[0].trigger('click');

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
    var index = $(this).index();
    $.each(headers, function(_index) {
      index == _index ? this.addClass('selected') : this.removeClass('selected');
    });
    content.fadeOut(150, function() {
      content.text(data.items[index].text).fadeIn(150);
    })
    self.onClick.call(this, event);
    return false;
  }

  function dummy() {}

}

/* === Tooltip component === */
function Tooltip($el) {

  var self = this;

  // add some events to our component
  this.onShow = dummy;
  this.onHide = dummy;

  var offset = $el.offset();
  offset.left += $el.width() + 12;

  this.div = $('<div/>', {
    'class': 'tooltip',
    text: $el.attr('title'),
    css: offset
  }).appendTo('body');

  var anm_show,
      anm_hide,
      anm_speed;
  switch ($el.attr('data-animation')) {
    case 'show':
      anm_show = 'show';
      anm_hide = 'hide';
      anm_speed = 'fast';
      break;
    case 'fadeIn':
      anm_show = 'fadeIn';
      anm_hide = 'fadeOut';
      anm_speed = 'fast';
      break;
    default:
      anm_show = 'show';
      anm_hide = 'hide';
      anm_speed = 0;
  }

  // short but tangled
  // var anm_show = $el.attr('data-animation');
  // var anm_speed = anm_show ? 'fast' : 0;
  // var anm_hide = anm_show == 'fadeIn' ? 'fadeOut' : 'hide';
  // anm_show = anm_show == 'show' | anm_show == 'fadeIn' ? anm_show : 'show';

  var timerId;
  var showed;

  $el.removeAttr('title')
    .mouseover(function(event) {
      timerId = setTimeout(function() {
        self.onShow.call(self.div, 'show');
        self.div[anm_show](anm_speed);
        showed = true;
      }, 300);
    })
    .mouseout(function() {
      clearTimeout(timerId);
      if (showed) {
        showed = false;
        self.onHide.call(self.div, 'hide');
        self.div[anm_hide](anm_speed);
      }
    });

  function dummy() {}

}
