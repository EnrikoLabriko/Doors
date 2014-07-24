var imgswitch = {
	init: function() {
		var margin = 0;
		var rightEdge = 0;
		var numberOfImages = $('.image-container > .image:last').index() + 1;
		var widthOfImageContainer = numberOfImages * 995;
		$('.image-container').width(widthOfImageContainer);
		$('.dot').click(function() {
			var activeDotIndex = $('.active-dot').index();
			var thisDotIndex = $(this).index();
			var differenceDotIndex = ((activeDotIndex - thisDotIndex) * 995);
			margin += differenceDotIndex;
			$('.image-container').animate({marginLeft: margin}, 450);
			$('.active-dot').removeClass('active-dot');
			$(this).addClass('active-dot');
		});
		$('.pointer-right').click(function() {
			if (margin === ((1 - numberOfImages) * 995)) {
				margin = 0;
			} else {
				margin -= 995;
			}
			$('.image-container').animate({marginLeft: margin}, 450);
			rightEdge = $('.active-dot').next().attr('class');
			if (rightEdge) {
				$('.active-dot').next().addClass('active-dot');
				$('.active-dot:first').removeClass('active-dot');
			} else {
				$('.active-dot').removeClass('active-dot');
				$('.dot:first').addClass('active-dot');
			}
		});
		$('.pointer-left').click(function() {
			if (margin === 0) {
				margin = -((numberOfImages - 1) * 995);
			} else {
				margin += 995;
			}
			$('.image-container').animate({marginLeft: margin}, 450);
			if ($('.active-dot').hasClass('first-dot')) {
				$('.active-dot').removeClass('active-dot');
				$('.dot:last').addClass('active-dot');
			} else {
				$('.active-dot').prev().addClass('active-dot');
				$('.active-dot:last').removeClass('active-dot');
			}
		});

	}
};

$(document).ready(function() {
	imgswitch.init();
})