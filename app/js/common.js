$(document).ready(function(){

	/* плавный скрол */
	$("body, .left_side").niceScroll({
		horizrailenabled : false,
		"verge" : "500"
	});

	/* гамбургер */
	$("#hamburger").click(function(){
    $(this).toggleClass("is-active");
		$('.side').toggleClass('is-active');
  });

});

