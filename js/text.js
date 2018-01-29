$(document).ready(function(){

	$("#js-burger-nav").click(function(){
		
		$("#js-top-nav").toggleClass("responsive-top-nav");
		$("#js-top-nav").toggleClass("top-nav");
		});

  //Modal
  
	$('.js-show-modal').click(function(event) {
    event.preventDefault();

    $('.js-modal').addClass('is-visible');
    $('.js-modal-overlay').addClass('is-visible');
  });

  $('.js-modal-overlay').click(function(event) {
    $('.js-modal').removeClass('is-visible');
    $('.js-modal-overlay').removeClass('is-visible');
     event.stopPropagation();
  });
});				
	