$(document).ready(function() {
	$.backstretch([
			'img/forest1.jpg',
			'img/forest2.jpg',
			'img/forest3.jpg'
		], {duration: 4000});

	 $('.button').fadeIn(10000);

	$('h1').airport(['Come Visit Our Beautiful Locations']);

	$('.button').raptorize({
	    'enterOn' : 'click',
	    'delayTime' : 5000
   	});


});
