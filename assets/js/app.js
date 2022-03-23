// scroll to fixed header start
$(document).ready(function() {
  $(window).scroll(function(){
      if ($(this).scrollTop() > 50) {
         $('#header').addClass('navigation-fixed');
      } else {
         $('#header').removeClass('navigation-fixed');
      }
  });
});
// scroll to fixed header end
// banner typed start
let typed = new Typed('#typed', {
  strings: ['Designer', 'Developer','Freelancer','Photographer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 3000,
  loop: true,
});
// banner typed end
// counter start
$('.counter').counterUp();
// counter end
// testimonial item slick start
$('.testimonial-content').slick({
  dots: true,
  autoplay:true,
  autoplaySpeed: 4000,
  speed: 1000,
  infinite: true,
});
// testimonial item slick end

// mobile menu
$('#mobile-menu-button').on('click', function(){
  $('#mobile-menu').slideToggle();
});

$('.mobile-nav').on('click', function(){
  $('#mobile-menu').slideUp();
});