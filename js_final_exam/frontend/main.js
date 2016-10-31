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
