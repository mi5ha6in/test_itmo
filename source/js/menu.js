var navMain = document.querySelector('.main-nav')
var navToggle = document.querySelector('.main-nav__toggle')

navMain.classList.remove('main-nav--nojs')

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var accordionItem = $('.accordion__item');
var accordionHeading = $('.accordion__heading');
var accordionСontent = $('.accordion__content');

accordionHeading.on('click', function() {
$(this)
    .siblings(accordionСontent)
    .stop()
    .slideToggle();
$(this).toggleClass('accordion__heading--active');
});
