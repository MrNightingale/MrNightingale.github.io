var slides = $('#slider').find('.item');

var currentSlideIndex;

var currentSlide = slides.filter(function(i, el) {
	if ($(el).hasClass('active')) currentSlideIndex = i;
	return $(el).hasClass('active');
});

function slide( direction ) {

	$( slides[ currentSlideIndex ] ).fadeOut("fast", function () {

		$('.controls').find('li.active').removeClass('active');

		direction == "right" ? currentSlideIndex++ : currentSlideIndex--;

		if( slides.length <= currentSlideIndex ) {
			currentSlideIndex = 0;
		} else if ( currentSlideIndex < 0) {
			currentSlideIndex = slides.length - 1;
		}

		$( slides[ currentSlideIndex ] ).fadeIn().addClass('active');

		$('.controls').each(function(i, el) {
			$(el).find('li').eq(currentSlideIndex).addClass('active');
		});

	}).removeClass('active');

	return false;

}

function slideTo( index ) {

	var slideId = index;

	$( slides[ currentSlideIndex ] ).fadeOut("fast", function () {

		$('.controls').find('li.active').removeClass('active');

		currentSlideIndex = slideId;

		$( slides[ currentSlideIndex ] ).fadeIn().addClass('active');

		$('.controls').each(function(i, el) {
			$(el).find('li').eq(currentSlideIndex).addClass('active');
		});

	}).removeClass('active');

	return false;

}

$(function() {
    $('#left-arrow').click(function(event) {
        event.preventDefault();
    });
    $('#right-arrow').click(function(event) {
        event.preventDefault();
    });
    $('.controls li').click(function(event) {
        event.preventDefault();
    });

    $('.more2').click(function() {
        $('.top__wrapper').css('display', 'block');
    });

    setTimeout(function() {
        $('#slider').css('display', 'block');
    }, 500);
});
