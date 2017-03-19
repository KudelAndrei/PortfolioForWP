
$(document).ready(function(){

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


});

$(window).on('load',function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});
