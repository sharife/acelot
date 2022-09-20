import "./css/main.css";



$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + ($(this).outerHeight() * .25);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},350);
            }
        });
    });
});



function sticktothetop() {
    var window_top = $(window).scrollTop();
    if ($('#stick-here').length) {
      var top = $('#stick-here').offset().top;
      if (window_top > top) {
        $('#stickThis').addClass('stick');
        $('#stick-here').height($('#stickThis').outerHeight());
      } else {
          $('#stickThis').removeClass('stick');
          $('#stick-here').height(0);
      }
    }
}
$(function() {
    if ($('#stick-here').length) {
      $(window).scroll(sticktothetop);
      sticktothetop();
    }
});



$(function(){  // $(document).ready shorthand
  $('.fade-1').delay(200).animate({'opacity':'1'},700);
  $('.fade-2').delay(500).animate({'opacity':'1'},700);
  $('.fade-3').delay(1000).animate({'opacity':'1'},700);
  $('.fade-4').delay(1500).animate({'opacity':'1'},700);
  $('.fade-5').delay(2500).animate({'opacity':'1'},700);
  $('.fade-6').delay(3500).animate({'opacity':'1'},700);
});


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href="#open-modal-video"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 0
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          // var $target = $(target);
          // $target.focus();
          // if ($target.is(":focus")) { // Checking if the target was focused
          //   return false;
          // } else {
          //   $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          //   $target.focus(); // Set focus again
          // };
          
        });
      }
    }
  });

