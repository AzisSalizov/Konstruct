let burger = $('.burger');
let nav = $('.header__nav');
 burger  .on('click' , function () {
  burger .toggleClass('active');
  nav.toggleClass('active');
  icons .toggleClass('active')

 } );