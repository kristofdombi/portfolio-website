$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 400);
        return false;
      }
    }
  });
});

$(document).ready(function(){
	if ($(window).width() < 768) {
		$('#portfolio').slick({
			swipe: true,
			fade: false,
			arrows: false
		});
	} else {
		$('#portfolio').slick({
			swipe: true,
			fade: true,
			arrows: true,
		});
	}
	// To be added
	// checkWidth();
	// $(window).resize(checkWidth);
});
