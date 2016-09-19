/*! pure JavaScript 
  dropdown menu
  by andy-pro */

function Menu(parent, data, _class) {
  var ul = document.createElement('ul');
  ul.className = 'menu' + (_class ? ' ' + _class : '');
  parseMenuData(ul, data);
  parent.appendChild(ul);
  var drops = ul.querySelectorAll('.menu__dropdown, .menu__dropleft, .menu__dropright');
  for (var i = 0; i < drops.length; i++) {
    (function(li) {
      li._dropChild = {
        ul: li.children[1],
        timerId: null,
        show: false
      };
      li.addEventListener('mouseover', eHandler);
      li.addEventListener('mouseout', eHandler);
    })(drops[i]);
  }

  function eHandler(e) {
    var show = e.type === 'mouseover',
        drop = this._dropChild,
        style = drop.ul.style;
    clearInterval(drop.timerId);
    drop.timerId = setTimeout(function() {
      if (drop.show != show) {
        drop.show = show;
        if (show) {
          style.opacity = 0;
          style.display = 'block';
        }
        style.overflow = 'hidden';
        var to = drop.ul.offsetHeight;
        animate({
          duration: 300,
          timing: new Function('x', 'return ' + (show ? '' : '1-') + 'Math.pow(x, 2);'),
          draw: function(progress) {
            style.opacity = progress;
            style.height = to * progress + 'px';
          },
          oncomplete: function() {
            if (!show) style.display = 'none';
            style.overflow = 'visible';
            style.height = 'auto';
          }
        });
      }
    }, show ? 300 : 100);
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
