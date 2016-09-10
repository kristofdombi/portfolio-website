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
