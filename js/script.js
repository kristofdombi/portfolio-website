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

//Next button
$(".next-btn").click(function() {
    getNumberOfCurrentItem();
    if (numberOfCurrentItem < maxNumberOfItems) {
        if (numberOfCurrentItem === 1) {
            $currentItem.children().fadeOut(400);
            $(".previous-btn").fadeIn(400);
        }
        $currentItem = $currentItem.next();
        $currentItem.addClass("active");
        setTimeout(function () {
            $currentItem.addClass('visual');
            }, 5);
        $currentItem.one('transitionend', function(e) {
            $currentItem.prev().removeClass('visual');
            $currentItem.prev().removeClass('active');
        });
        //Hide next-btn at the end of the items
        if (numberOfCurrentItem === maxNumberOfItems - 1) {
            $(".next-btn").fadeOut(400);
        }
        console.log(numberOfCurrentItem);
        console.log($currentItem);
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
        $currentItem.addClass("visual");
        setTimeout(function () {
            $currentItem.addClass('active');
            }, 5);
        $currentItem.next().removeClass('visual');
        $currentItem.next().one('transitionend', function(e) {
            $currentItem.next().removeClass('active');
        });
        if (numberOfCurrentItem === maxNumberOfItems) {
            $(".next-btn").fadeIn(400);
        }
        //Hide previous-btn at the beginning
        if (numberOfCurrentItem === 2) {
            $(".previous-btn").fadeOut(400);
        }
        console.log(numberOfCurrentItem);
    }
});
