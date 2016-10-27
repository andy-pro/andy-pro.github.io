/* it's a final exam */

$(function() {

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
      form = document.getElementById('pixplorer'),
      input = form.querySelector('input'),
      query = 'http://api.pixplorer.co.uk/image?amount=12&size=tb';

  form.addEventListener('submit', function(e) {
    var val = input.value,
        url = query + (val ? '&word=' + val : '');
    pixplorer.start(url);
    e.preventDefault();
  });

  var pixplorer = new Pixplorer({
    target: grid,
    onLoad: initMasonry
  });

  form.dispatchEvent(new Event('submit'));

  function initMasonry() {
    new Masonry(grid, {
      columnWidth: '.grid__sizer',
      gutter: '.grid__gutter',
      itemSelector: '.grid__item',
      transitionDuration: '0.5s'
    });
  }

});
