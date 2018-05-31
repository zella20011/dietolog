$(document).ready(function () {

	$('#open-menu').click( function(event){
		event.preventDefault();
		$('#burger .left').animate({left: "0"},800);
		$('.overlay').fadeIn(400).css('display', 'block');
	});

	$('.close, .overlay, #burger .menu li a').click( function(){
		$('#burger .left').animate({left: "-100%"},800);
		$('.overlay').fadeIn(400).css('display', 'none');
	});

	$('header nav .content .menu, footer .content .row nav ul, header nav .content #burger .left ul').on('click','a', function (event) {
	   $(this).closest('header nav .content .menu, footer .content .row nav ul').find('li').removeClass('active');
	   $(this).closest('li').addClass('active');
	});

});