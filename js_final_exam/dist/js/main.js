/* it's a final exam */

document.addEventListener('DOMContentLoaded', function () {

  'use strict';

  var opts = {
    navigation: true,
    // navigationText: ['<', '>'],
    navigationText: ['&lang;', '&rang;'],
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    pagination: false
  };

  $('#carousel1').owlCarousel(opts);
  $('#carousel2').owlCarousel(opts);
  $('#carousel3').owlCarousel(opts);

  var grid = document.getElementById('grid'),
      pixform = document.getElementById('pixform'),
      input = pixform.querySelector('input');

  pixform.addEventListener('submit', function(e) {
    startPixEngine();
    e.preventDefault();
  });

  // var pixplorer = new Pixplorer({
  //   target: grid,
  //   onLoad: initMasonry
  // });

  var pixabay = new Pixabay({
    target: grid,
    onLoad: initMasonry
  });

  // pixform.dispatchEvent(new Event('submit'));
  startPixEngine();

  function startPixEngine() {
    var val = input.value;
    // pixplorer.start(val);
    pixabay.start(val);
  }

  function initMasonry() {
    new Masonry(grid, {
      columnWidth: '.grid__sizer--pixabay',
      gutter: '.grid__gutter',
      itemSelector: '.grid__item',
      transitionDuration: '0.5s'
    });
  }
  //
  // function initMasonry() {
  //   new Masonry(grid, {
  //     columnWidth: '.grid__sizer',
  //     gutter: '.grid__gutter',
  //     itemSelector: '.grid__item',
  //     transitionDuration: '0.5s'
  //   });
  // }

});

function Pixabay(opts) {

  var template = tmpl('\
    <div class="grid__sizer grid__sizer--pixabay"></div>\
    <div class="grid__gutter"></div>\
    <% for (var i = 0, l = images.length; i < l; i++) {\
      var image = images[i]; %>\
      <div class="grid__item grid__item--pixabay">\
        <img class="grid__img grid__img--pixabay" src="<%= image.webformatURL %>">\
        <div class="grid__word grid__word--pixabay"><%= image.tags.split(",").join("") %></div>\
      </div>\
    <% } %>\
  ');

  this.start = function(val) {
    /* key */var key = '3636766-7834e9b7c899fe1ae52f8532f';/* key */
    var url = 'https://pixabay.com/api/?image_type=photo&per_page=12&orientation=horizontal' + (val ? '&q=' + val: '') + '&key=' + key;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onreadystatechange = function() {
      if (xhr.readyState != 4) return;
      if (xhr.status == 200) {
        renderTiles(JSON.parse(xhr.responseText));
      } else {
        console.log(xhr.status + ': ' + xhr.statusText);
      }
    }
    return false;
  }

  function renderTiles(data) {
    opts.target.innerHTML = template({images: data.hits});
    imagesLoaded(opts.target).on('always', function() {
      opts.onLoad();
      var word = opts.target.querySelectorAll('.grid__word');
      for (var i = 0, l = word.length; i < l; i++) {
        word[i].style.display = 'block';
      }
    });
  };

}
