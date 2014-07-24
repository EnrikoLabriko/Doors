var favorites = {
  init: function() {

	var rightBarContainer = $('body').find(".right-bar-container"),
	    didScroll = false;
	 
	$(window).scroll(function() {
	    didScroll = true;
	});
	 
	setInterval(function() {
	    if ( didScroll ) {
	        didScroll = false;
			var height = $(window).scrollTop();
			if (height > 70) {
				rightBarContainer.css('position', 'fixed')
				rightBarContainer.css('top', '20px')
				
			} else {
				rightBarContainer.css('position', 'absolute')
				rightBarContainer.css('top', '90px')
			}
	    }
	}, 50);
  }
};

$(document).ready(function() {
	favorites.init();
})