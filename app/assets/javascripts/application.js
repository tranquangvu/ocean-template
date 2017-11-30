//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery.imgpreloader
//= require jquery
//= require bootstrap-sprockets
//= require owl.carousel
//= require viewportchecker

$(document).on('click', 'a[href^="#"]', function(e) {
  var id = $($(this).attr('href'));
  if (id.size() === 0) return;
  e.preventDefault();
  $('body, html').animate({scrollTop: id.offset().top}, 1000);
});

function createAnimation(element, animate) {
  element.addClass("hide-elem").viewportChecker({
    classToAdd: ('active-elem animated ').concat(animate),
    offset: 100
  });
}

$(window).scroll(function () {
  if ($(this).scrollTop() > 100)
    $('.navbar-inverse').addClass('active');
  else
    $('.navbar-inverse').removeClass('active');
});
