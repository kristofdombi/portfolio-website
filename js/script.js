$(document).ready(function(){
	if ($(window).width() < 960) {
		$('#portfolio').slick({
			swipe: true,
			fade: false,
			arrow: false
		});
	} else {
		$('#portfolio').slick({
			swipe: true,
			fade: true,
			arrow: true,
		});
	}
	// To be added
	// checkWidth();
	// $(window).resize(checkWidth);
});
