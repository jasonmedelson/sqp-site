$(document).ready(function() {
	enable_smooth_scroll();
	var w = parseInt(window.innerWidth);
	if(w >= 990){
		$("ul.nav").css("display","block");
	}
	else{
		$("ul.nav").css("display","none");
	}
	$("a.mini-nav").click(function(){
		$("ul.nav").slideToggle("slow");
		return false;
	});
	$(window).resize(function(e) {
        screen_resize();
	});
  $('.form-button').click(function(){
    var clickBtnValue = $(this).val();
    var ajaxurl = 'ajax.php',
    data =  {'action': clickBtnValue};
    $.post(ajaxurl, data, function (response) {
        // Response div goes here.
        alert("action performed successfully");
    });
  });
});

function screen_resize() {
    var w = parseInt(window.innerWidth);
    if(w >= 990) {
        $("ul.nav").css("display","block");
	}
	else{
		$("ul.nav").css("display","none");
	}
}
function enable_smooth_scroll(){
	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.not('[href="#myCarousel"]')
	.click(function(event) {
	// On-page links
	if (
	  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
	  &&
	  location.hostname == this.hostname)
	{
	  // Figure out element to scroll to
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	  // Does a scroll target exist?
	  if (target.length) {
	    // Only prevent default if animation is actually gonna happen
	    event.preventDefault();
	    $('html, body').animate({
	      scrollTop: target.offset().top - 40
	    }, 1000, function() {
	      // Callback after animation
	      // Must change focus!
	      var $target = $(target);
	      $target.focus();
	      if ($target.is(":focus")) { // Checking if the target was focused
	        return false;
	      } else {
	        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	        $target.focus(); // Set focus again
	      };
	    });
	  }
	}
	});
};
