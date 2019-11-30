new WOW().init();

$(document).ready(function () {


	// MENU
	let link = $('.menu-link');
	let link_active = $('menu-link_active');
	let menu = $('.menu');
	link.click(function () {
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active');
	});
	link_active.click(function() {
		link.removeClass('menu-link_active');
	});




	// SLIDER
	var mainSlick = $('.sliderS').slick({
		nextArrow: document.querySelector('#my-arrow-next'),
		prevArrow: document.querySelector('#my-arrow-prev'),
	  	dots: false,
	  	swipe: false,

		
	  });


	$('.my-1').on('click', function() {

			mainSlick.slick('slickNext');
	});
	$('.my-2').on('click', function() {

			mainSlick.slick('slickPrev');
	});



	// TAB


	//обработчик кликов по неактивным табам
	$('.city-swap div').not('.city-name_active').click(function(){
	    //номер таба
	    var index = $(this).index();
	    //соответствующая закладка
	    var content = $('.tab-content li').eq(index);
	    //таб сделать активным, остальные неактивными
	    $(this).addClass('city-name_active').siblings().removeClass('city-name_active');
	    //открыть нужную вкладку, закрыть остальные
	    $('.tab-content .map-info-block').css('display', 'none').eq(index).css('display', 'block');
	})





	$(function(){
    $('.city-swap div:first').addClass('city-name_active');
    $('.tab-content .map-info-block:first').css('display', 'block');
  })
	//mask 

	$("#phone").mask("+38 (09) 9 9 - 9 9 - 9 9 9 9");

});