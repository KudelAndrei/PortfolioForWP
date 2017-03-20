$(document).ready(function() {

	/* плавный скрол */
	$("body, .side").niceScroll({
		horizrailenabled : false,
		"verge" : "500"
	});

	/* гамбургер */
	$("#hamburger").click(function(){
    $(this).toggleClass("is-active");
		$('.side').toggleClass('is-active');
  });

	/* плавная загрузка изображений */
  $(".gallery__item img").lazyload({
		effect : "fadeIn",
		threshold : 1800
	}).parent().hover(function() {
		$(".gallery .gallery__item").css("opacity", ".7");
		$(this).css("opacity", "1");
	}, function() {
		$(".gallery .gallery__item").css("opacity", "1");
	});

	/* плитки */
	var wall = new freewall(".gallery");
	wall.reset({
		selector: ".gallery__item",
		animate: true,
		cellW: 150,
		cellH: "auto",
		gutterX : 5,
		gutterY : 5,
		onResize: function() {
			wall.fitWidth();
		}
	});
	var images = wall.container.find(".gallery__item");
	images.find("img").load(function() {
		wall.fitWidth();
	});

	
	$(".filter__item").click(function() {
		$(".filter__item").removeClass("active");
		var filter = $(this).addClass("active").data("filter");
		wall.filter(filter);
		setTimeout(function() {
			$(window).resize();
			wall.fitWidth();
		}, 400);
	});

	/* просмотр изображений */
	$(".gallery .gallery__item").magnificPopup({
		type : 'image',
		gallery : {
			enabled : true
		},
		removalDelay: 400,
		mainClass: 'mfp-fade'
	}).click(function() {
		$("button.mfp-arrow").delay(1000).fadeIn();
	});


});

$(window).on('load', function() {
	$(window).resize();
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
	
});


