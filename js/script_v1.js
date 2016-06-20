//The main task is to change the divs' opacity values on a click event

var maxNumberOfItems = $(".item").length;

var numberOfCurrentItem;

var $currentItem = $(".active");

//Make it as a function
function getNumberOfCurrentItem () {
	$(".item").each(function(i){
		if ($(this).hasClass("active")) {
			numberOfCurrentItem = i + 1;
			return numberOfCurrentItem;
		}
	});
};

getNumberOfCurrentItem();

/*function animateLeft () {
	$currentItem.children().animate({ "left": "+=50%" }, "slow" );
}; */

//Next button
$(".next-btn").click(function() {
    getNumberOfCurrentItem();
    if (numberOfCurrentItem < maxNumberOfItems) {
        if (numberOfCurrentItem === 1) {
            $currentItem.children().fadeOut(400);
            $(".previous-btn").fadeIn(400);
        }
        $currentItem = $currentItem.next();
        $(".item").removeClass("active");
        $currentItem.addClass("active");
        //Hide next-btn at the end of the items
        if (numberOfCurrentItem === maxNumberOfItems - 1) {
            $(".next-btn").fadeOut(400);
        }
    }
});

//Previous button
$(".previous-btn").click(function() {
    getNumberOfCurrentItem();
    if (numberOfCurrentItem > 1) {
        if (numberOfCurrentItem === 2) {
            $currentItem.prev().children().fadeIn(400);
        }
        $currentItem = $currentItem.prev();
        $(".item").removeClass("active");
        $currentItem.addClass("active");
        if (numberOfCurrentItem === maxNumberOfItems) {
            $(".next-btn").fadeIn(400);
        }
        //Hide previous-btn at the beginning
        if (numberOfCurrentItem === 2) {
            $(".previous-btn").fadeOut(400);
        }
    }
});
