var accordionHeading = $('.accordion__heading');
var accordionСontent = $('.accordion__content');

accordionHeading.on('click', function() {
$(this)
    .siblings(accordionСontent)
    .stop()
    .slideToggle();
$(this).toggleClass('accordion__heading--active');
});
