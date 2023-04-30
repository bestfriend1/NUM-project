(function($){
	$(document).ready(function(){

		//scroll
	$('.scroll span').click(function(){
		$('html,body').animate({scrollTop:'0'},1000);
	});
	$(window).scroll(function(){
		if($(window).scrollTop() > 100){
			$('.scroll span').fadeIn(500);
		}else{
			$('.scroll span').fadeOut(500);
		}
	});
	//slide
	$('#bar').click(function(){
		$('.slide').css({
			right:'0px',
			transition:'.5s'
		});
	});
	$('#cross').click(function(){
		$('.slide').css({
			right:'-100vw',
			transition:'.5s'
		});
	});
	//collapse
		$('.btn1').click(function(){
			$('#btn1').show();
			$('#btn2').hide();
		});

		$('.btn2').click(function(){
			$('#btn2').show();
			$('#btn1').hide();
		});
		//brand-logo
			$("#rcbrand-demo").rcbrand({
			 infinite: true,
			 itemsToScroll: 1,
			 infinite: true,
			 animationSpeed: 500,
			 visibleItems: 5,
			 autoPlay: {
		    enable: true,
		    interval: 4000,
		    pauseOnHover: true
  			}
		});
	});
})(jQuery)