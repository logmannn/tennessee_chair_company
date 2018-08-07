$(function() {
  $('.body a').hover(function() {
    var item = $('.body a').index(this);
    // console.log(item);
    $('img.first-image').hide();
    $('.image').removeClass('active');
    $('.image').eq(item).addClass('active');
  });
});
