$(document).ready(function() {

/*-----------------------------------------------------------------------------------*/
/*	External Links
/*-----------------------------------------------------------------------------------*/
	$('a[rel=external]').attr('target', 'blank');

	
/*-----------------------------------------------------------------------------------*/
/*	Dropdown Menu
/*-----------------------------------------------------------------------------------*/
	$('nav ul li').hover(function() {
		$(this).find('ul:first').stop().slideDown('fast');
	},function(){
		$(this).find('ul:first').stop().slideUp('fast');
	});
	
/*-----------------------------------------------------------------------------------*/
/*	Mobile Menu
/*-----------------------------------------------------------------------------------*/
	var mobileMenu = $('#mobileNav');
	var mobileCLick = $('a#mobile-menu');
	
	mobileMenu.hide();
	
	mobileCLick.click(function() {
		mobileMenu.slideToggle();
	});
	
/*-----------------------------------------------------------------------------------*/
/*	Counter
/*-----------------------------------------------------------------------------------*/
	var dDay = new Date();
				//   year - month - day
	dDay = new Date(Date.UTC(2013, 9, 26, 12, 0, 0));
	$('.counter').countdown({until: dDay});
		
/*-----------------------------------------------------------------------------------*/
/*	Feature Slidier
/*-----------------------------------------------------------------------------------*/
	//Center Images
	centerImgs();
	
	//Call Functions on window resize event
	$(window).resize(function(){
    	centerImgs();
    });

/*-----------------------------------------------------------------------------------*/
/*	Center Images Function
/*-----------------------------------------------------------------------------------*/
	function centerImgs() {
		$('#featuredSlider ul.slides li').each(function() {
			var img 	 	 = $(this).find('img'),
				vpWidth  	 = $(window).width(),
				vpHeight,
				imgHeight	 = img.attr('height'),
				imgWidth	 = img.attr('width'),
				imgRatio	 = imgWidth / imgHeight,
				vpRatio,
				newImgWidth,
				newImgHeight = vpWidth / imgRatio;

			if( vpWidth <= 670 ) {
				img.css({
					'position': 'absolute',
					'width': vpWidth,
					'height': newImgHeight,
					'top': 0
				});
			} else {
				img.css({
					'position': 'absolute',
					'width': vpWidth,
					'height': newImgHeight,
					'top': -(newImgHeight - 500)/2
				});
			}			
		});
	}

	
/*-----------------------------------------------------------------------------------*/
/*	Hover Counter/buy tickets
/*-----------------------------------------------------------------------------------*/
	$('.buy-tickets').hide();
	
	// Hover Actions
	$('#counter-container').hover(function() {
		$('.counter').hide();
		$('.buy-tickets').fadeIn();
	}, function() {
		$('.buy-tickets').hide();
		$('.counter').fadeIn();
	});
	
/*-----------------------------------------------------------------------------------*/
/*	Speaker's Description hover
/*-----------------------------------------------------------------------------------*/
	$('.speaker-desc').css('bottom', -70);
	
	$('#speakers li').hover(function() {
		$(this).find('.speaker-desc').animate({bottom: '0'}, 'fast');
	},function() {
		$('.speaker-desc').animate({bottom: '-70'}, 'fast');
	});
	
/*-----------------------------------------------------------------------------------*/
/*	Show/Hide speaker's info
/*-----------------------------------------------------------------------------------*/
	$('.speaker-info').hide();
	
	//$('<a href="#" class="event-ticker"></a>').appendTo('.event-date');
	
	//hide
	$('.event-date a').click(function(e) {
	  if( !$(this).hasClass('minus') ) {
	  	$(this).addClass('minus');
	  	$(this).parent().nextAll('.speaker-info').slideDown();
	  } else {
	  	$(this).removeClass('minus');
	  	$(this).parent().nextAll('.speaker-info').slideUp();
	  }
	  e.preventDefault();
	});
	
	
/*-----------------------------------------------------------------------------------*/
/*	speakers right margin fix 
/*-----------------------------------------------------------------------------------*/
	$('ul#speakers-main-list li:nth-child(even)').addClass('last');
	$('ul#speakers-secondary-list li:nth-child(3n)').addClass('last');
	
	
/*-----------------------------------------------------------------------------------*/
/*	Scroll To Top
/*-----------------------------------------------------------------------------------*/
	var backToTop = $('<a class="scrollTop" href="#">Top</a>');
	
	backToTop.appendTo('body').hide();

	// show/hide back-to-top button
	$(window).scroll(function() {
	
		if ($(window).scrollTop() >= 230) {
		
			backToTop.fadeIn('slow');
			
		} else {
		
			backToTop.fadeOut('fast');
			
		}
	
	});
   
    backToTop .click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });


/*-----------------------------------------------------------------------------------*/
/*	Get Tweets from json
/*-----------------------------------------------------------------------------------*/


	
/*-----------------------------------------------------------------------------------*/
/*	prettyPhoto lightbox
/*-----------------------------------------------------------------------------------*/
	$("a[rel^='prettyPhoto']").prettyPhoto({
    	animation_speed: 'fast', /* fast/slow/normal */
    	slideshow: 5000, /* false OR interval time in ms */
    	autoplay_slideshow: false, /* true/false */
    	opacity: 0.80, /* Value between 0 and 1 */
    	show_title: false, /* true/false */
    	allow_resize: true, /* Resize the photos bigger than viewport. true/false */
    	default_width: 500,
    	default_height: 344,
    	counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
    	theme: 'pp_default', /* light_rounded / pp_default / dark_rounded / light_square / dark_square / facebook */
    	horizontal_padding: 20, /* The padding on each side of the picture */
    	hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
    	wmode: 'opaque', /* Set the flash wmode attribute */
    	autoplay: true, /* Automatically start videos: True/False */
    	modal: false, /* If set to true, only the close button will close the window */
    	deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
    	overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
    	keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
    	changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
    	callback: function(){}, /* Called when prettyPhoto is closed */
    	ie6_fallback: true,
    	social_tools: false
    });
	
	
});/* End jQuery */




// ===== Grayscale Images ===== //
	// On window load. This waits until images have loaded which is essential
/*$(window).load(function(){
	
	// Fade in images so there isn't a color "pop" document load and then on window load
	$("#sponsors > div img, #carousel .slides img").fadeIn(500);
	
	// clone image
	$('#sponsors > div img, #carousel .slides img').each(function(){
		var el = $(this);
		el.css({"position":"absolute","left":"0"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"998","opacity":"0", "left":"0"}).insertBefore(el).queue(function(){
			var el = $(this);
			el.parent().css({"width":this.width,"height":this.height,"vertical-align": "middle", "position":"relative"});
			el.dequeue();
		});
		this.src = grayscale(this.src);
	});
	
	// Fade image 
	$('#sponsors > div img, #carousel .slides img').mouseover(function(){
		$(this).parent().find('img:first').stop().animate({opacity:1}, 500);
	})
	$('.img_grayscale').mouseout(function(){
		$(this).stop().animate({opacity:0}, 500);
	});		
});

// Grayscale w canvas method
function grayscale(src){
	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');
	var imgObj = new Image();
	imgObj.src = src;
	canvas.width = imgObj.width;
	canvas.height = imgObj.height; 
	ctx.drawImage(imgObj, 0, 0); 
	var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
	for(var y = 0; y < imgPixels.height; y++){
		for(var x = 0; x < imgPixels.width; x++){
			var i = (y * 4) * imgPixels.width + x * 4;
			var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
			imgPixels.data[i] = avg; 
			imgPixels.data[i + 1] = avg; 
			imgPixels.data[i + 2] = avg;
		}
	}
	ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
	return canvas.toDataURL();
}*/

$(window).load(function() {

    /* Carousel */
    $('#carousel').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 150,
        itemMargin: 50,
        controlNav: false,
        slideshowSpeed: 5000,
        animationSpeed: 600
    });

    $('.flexslider').flexslider({
        namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
        selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
        animation: "slide",              //String: Select your animation type, "fade" or "slide"
        easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
        direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
        reverse: false,                 //{NEW} Boolean: Reverse the animation direction
        animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
        startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        slideshow: true,                //Boolean: Animate slider automatically
        slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
        initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
        randomize: false,               //Boolean: Randomize slide order

        // Usability features
        pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
        useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
        touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
        video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

        // Primary Controls
        controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText: "Previous",           //String: Set the text for the "previous" directionNav item
        nextText: "Next",               //String: Set the text for the "next" directionNav item

        // Secondary Navigation
        keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
        multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
        mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
        pausePlay: false,               //Boolean: Create pause/play dynamic element
        pauseText: 'Pause',             //String: Set the text for the "pause" pausePlay item
        playText: 'Play',               //String: Set the text for the "play" pausePlay item

        // Special properties
        controlsContainer: "",          //{UPDATED} Selector: USE CLASS SELECTOR. Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be ".flexslider-container". Property is ignored if given element is not found.
        manualControls: "",             //Selector: Declare custom control navigation. Examples would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
        sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
        asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

        // Carousel Options
        itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
        itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
        minItems: 0,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
        maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
        move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.

        // Callback API
        start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
        before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
        after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
        end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
        added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
        removed: function(){}
    });
});
