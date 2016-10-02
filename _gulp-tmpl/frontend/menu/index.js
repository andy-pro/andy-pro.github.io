$(function() {

  console.log('it is menu');

  $('.menu').on('click', function() {
    // console.log('clicks');
    $.flash('click', 4);
  });

});
