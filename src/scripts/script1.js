$(function () {


	$('#contacts__link').click(function() {
		$('.feedback').css('display', 'flex');
	});
	$('#feedback__close').click(function() {
		$('.feedback').css('display', 'none');
	});



	$('#toggle-icon').click(function() {
		$(this).toggleClass("change");
		$('.main-nav__menu').toggleClass('main-nav__menu_toggle-active');
	})


$('.slider').bxSlider();


});

