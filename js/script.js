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
	
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1987591,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
});
