$(document).ready(function(){
	var closer = $('.ion-close');
	var hamburger = $('.ion-navicon');
	// $('nav').hide();
	closer.hide();
	hamburger.click(function(){
		$('nav').addClass('show-nav');
		closer.show();
		hamburger.hide();
	})
	closer.click(function(){
		$('nav').removeClass('show-nav');
		closer.hide();
		hamburger.show();
	})
})