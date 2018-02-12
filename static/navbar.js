//Menu
$(document).ready(function () {
	$(".menu-icon").on("click", function () {
		$("nav ul").toggleClass("showing");
	});
});

// Scrolling

$(window).on("scroll", function () {
	if ($(window).scrollTop()) {
		$("nav").addClass("black");
		$("a").addClass("color: white");
		$(".logo").addClass("color: white");
	} else {
		$("nav").removeClass("black");
		$("a").removeClass("color: white");
		$(".logo").removeClass("color: white");
	}
});
