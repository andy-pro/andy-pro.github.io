/* it's a final exam */

$(function() {

  'use strict';

  let opts = {
    navigation : true,
    // navigationText: ['<', '>'],
    navigationText: ['&lang;', '&rang;'],
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    pagination: false
  };

  $('#carousel1').owlCarousel(opts);
  $('#carousel2').owlCarousel(opts);
  $('#carousel3').owlCarousel(opts);

  var masonry = new Masonry('.grid', {
    // itemSelector: '.grid-item',
    // columnWidth: 310,
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    itemSelector: '.grid-item'
    // gutter: 5
  });

  var pixplorer = new Pixplorer('#pixplorer', {
    // url: 'http://api.pixplorer.co.uk/image?',
    url: 'http://api.pixplorer.co.uk/image?amount=10&size=tb'    
  });

});
