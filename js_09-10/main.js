/* lesson 09-10 */

$(function() {

  var clr_select = $('#slider_color'),
      slider = $('#slider'),
      colors = $.Color.names;

  for (var color in colors) {
    var val = colors[color];
    if (typeof val == 'string') {
      clr_select.append(
        $('<option>')
        .text(color.charAt(0).toUpperCase() + color.slice(1))
        .val(val)
      );
    }
  }

  clr_select.chosen().change(function(e) {
    // slider.css('background-color', this.value);
    slider.animate({
      backgroundColor: this.value,
    }, 2000 );
  });

  $('.jcarousel').jcarousel({
    wrap: 'circular'
  });

  $('.jcarousel-control-prev').jcarouselControl({
    target: '-=1'
  });

  $('.jcarousel-control-next').jcarouselControl({
    target: '+=1'
  });

  $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
    })
    .jcarouselPagination();

});

document.addEventListener("DOMContentLoaded", function() {
  var main_menu = new Menu(document.querySelector('.main-menu'), main_menu_data);
});

function Menu(parent, data, _class) {
  var ul = document.createElement('ul');
  ul.className = 'menu' + (_class ? ' ' + _class : '');
  parseMenuData(ul, data);
  parent.appendChild(ul);
  var drops = ul.querySelectorAll('.menu__dropdown, .menu__dropleft, .menu__dropright');
  for (var i = 0; i < drops.length; i++) {
    (function(li) {
      var ul = li.children[1],
          style = ul.style,
          timerId,
          state;
      li.addEventListener('mouseover', listener);
      li.addEventListener('mouseout', listener);
      function listener(e) {
        clearInterval(timerId);
        var show = e.type === 'mouseover';
        timerId = setTimeout(function() {
          if (state != show) {
            state = show;
            if (show) {
              style.opacity = 0;
              style.display = 'block';
            }
            style.overflow = 'hidden';
            var to = ul.offsetHeight;
            animate({
              duration: 300,
              timing: new Function('x', 'return ' + (show ? '' : '1-') + 'Math.pow(x, 2);'),
              draw: function(progress) {
                style.opacity = progress;
                style.height = to * progress + 'px';
              },
              oncomplete: function() {
                style.overflow = 'visible';
                style.height = 'auto';
                if (!show) style.display = 'none';
              }
            });
          }
        }, show ? 300 : 100);
      }
    })(drops[i]);
  }

  function parseMenuData(ul, data) {
    // based on code from http://stackoverflow.com/questions/19003285/creating-a-menu-from-json
    for (var i = 0; i < data.length; i++) {
      var li = document.createElement('li'),
          item = data[i];
      li.innerHTML = '<a href="' + item.link + '">' + item.title + ' </a>';
      ul.appendChild(li);
      if (item.sub) {
        var subul = document.createElement('ul');
        li.className = 'menu__drop' + item.dir;
        li.appendChild(subul);
        parseMenuData(subul, item.sub);
      }
    }
  }

}

function animate(opts) {
  // https://learn.javascript.ru/js-animation
  var start = performance.now();
  requestAnimationFrame(function animate(time) {
    var timeFraction = (time - start) / opts.duration;
    if (timeFraction > 1) timeFraction = 1;
    var progress = opts.timing(timeFraction)
    opts.draw(progress);
    if (timeFraction < 1) requestAnimationFrame(animate);
    else if (typeof opts.oncomplete == 'function') {
      // add 'oncomplete' event
      opts.oncomplete({type: 'oncomplete'});
    }
  });
}

var main_menu_data = [
  // https://www.mockaroo.com/
  {"title": "United States", "link": "#", "sub": null},
  {"title": "Bosnia and Herzegovina", "link": "#", "sub": null},
  {"title": "Portugal", "link": "#", "dir": "down", "sub": [
    {"title": "Banquero", "link": "#", "sub": null},
    {"title": "Ceerigaabo", "link": "#", "sub": null},
    {"title": "San Pedro", "link": "#", "dir": "right", "sub": [
      {"title": "42 Shasta Road", "link": "#", "sub": null},
      {"title": "16 Gina Court", "link": "#", "sub": null},
      {"title": "29 Rusk Pass", "link": "#", "sub": null},
      {"title": "33 Farwell Park", "link": "#", "dir": "right", "sub": [
        {"title": "Skinix", "link": "#", "sub": null},
        {"title": "Skynoodle", "link": "#", "sub": null},
        {"title": "Google", "link": "#", "dir": "right", "sub": [
          {"title": "Phillip Cruz", "link": "#", "sub": null},
          {"title": "Johnny White", "link": "#", "sub": null},
          {"title": "Sharon Harrison", "link": "#", "sub": null},
          {"title": "Joseph Parker", "link": "#", "sub": null},
          {"title": "Carolyn Peters", "link": "#", "sub": null},
          {"title": "Ruby Nelson", "link": "#", "sub": null}
        ]},
        {"title": "Browsezoom", "link": "#", "sub": null},
      ]},
      {"title": "685 Anthes Hill", "link": "#", "sub": null},
    ]},
    {"title": "Rancakuya", "link": "#", "sub": null},
    {"title": "Cuauhtemoc", "link": "#", "sub": null}
  ]},
  {"title": "Philippines", "link": "#", "sub": null},
  {"title": "Brazil", "link": "#", "dir": "down", "sub": [
    {"title": "Luowan", "link": "#", "sub": null},
    {"title": "Tapera", "link": "#", "sub": null},
    {"title": "Ifanes", "link": "#", "sub": null},
    {"title": "Shufflebeat", "link": "#", "dir": "left", "sub": [
      {"title": "236 Chive Trail", "link": "#", "dir": "left", "sub": [
        {"title": "Livetube", "link": "#", "dir": "left", "sub": [
          {"title": "Louis Gray", "link": "#", "sub": null},
          {"title": "Gary Hamilton", "link": "#", "sub": null},
          {"title": "Thomas Hill", "link": "#", "sub": null},
          {"title": "Charles Shaw", "link": "#", "sub": null}
        ]},
        {"title": "Feednation", "link": "#", "dir": "left", "sub": [
          {"title": "Roger Phillips", "link": "#", "sub": null},
          {"title": "Judith Cooper", "link": "#", "sub": null},
          {"title": "Sean White", "link": "#", "sub": null},
          {"title": "Martin Griffin", "link": "#", "sub": null}
        ]}
      ]},
      {"title": "65 Gerald Park", "link": "#", "sub": null}
    ]},
    {"title": "Kampungdesa", "link": "#", "sub": null}
  ]}
];
