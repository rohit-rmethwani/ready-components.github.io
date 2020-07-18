$(function () {

	$("#mobile-navigation-button").click(function(){
		if($("#mobile-navigation-button-icon").hasClass("fa-bars")){
			$("#mobile-navigation").toggle("none");
			$("#mobile-navigation-button-icon").removeClass("fa-bars");
			$("#mobile-navigation-button-icon").addClass("fa-close");
		}
		else{
			$("#mobile-navigation").toggle("none");
			$("#mobile-navigation-button-icon").removeClass("fa-close");
			$("#mobile-navigation-button-icon").addClass("fa-bars");
		}
	});

	$(".link").click(function(e){
		if($(window).width() < 767){	
			$("#mobile-navigation").toggle("show");
			if($("#mobile-navigation").hasClass("none")){
				// $("#mobile-navigation").removeClass("none");
				// $("#mobile-navigation").addClass("show");
				$("#mobile-navigation-button-icon").removeClass("fa-close");
				$("#mobile-navigation-button-icon").addClass("fa-bars");
			}
			else{
				$("#mobile-navigation").addClass("none");
				$("#mobile-navigation").removeClass("show");
				$("#mobile-navigation-button-icon").removeClass("fa-bars");
				$("#mobile-navigation-button-icon").addClass("fa-close");
			}
		}
	});

	$(window).scroll(function(){
		if($(this).scrollTop()>100){
			// $("nav").addClass("wg-top-nav");
			$("nav").addClass("shadow");
		}else{
			// $("nav").removeClass("wg-top-nav");
			$(".btn-back-to-top").fadeOut();
			$("nav").removeClass("shadow");
		}
	});
	
	/*****************************
			CUSTOMERS SECTION
	******************************/
	$(".testimonials-container").owlCarousel({
		items:1,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
	});
		
	$("a.smooth-scroll").click(function(event){
		
		//prevents to perform the default operation
		event.preventDefault();
		
		var section = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(section).offset().top - 69,
		},1250, "easeInOutExpo");
	});
});
