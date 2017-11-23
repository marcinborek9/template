
// ON SCROLL PAGE SLIDER FUNCTION
$(document).ready(function() {
function ScrollHandler(pageId) { 
  var page = $('#' + pageId);
  var pageStart = page.offset().top;
  var pageJump = false;

  function scrollToPage() {
    pageJump = true;
	  $('html, body').animate({ 
      scrollTop: pageStart 
    }, {
      duration: 1000,
      complete: function() {
        pageJump = false;
      }
    });  
  }
  window.addEventListener('wheel', function(event) {
   var viewStart = $(window).scrollTop();
   if (!pageJump) { 
      var pageHeight = page.height();
      var pageStopPortion = pageHeight / 2;
      var viewHeight = $(window).height();

      var viewEnd = viewStart + viewHeight;
      var pageStartPart = viewEnd - pageStart;
      var pageEndPart = (pageStart + pageHeight) - viewStart;
      
      var canJumpDown = pageStartPart >= 0; 
      var stopJumpDown = pageStartPart > pageStopPortion; 
      
      var canJumpUp = pageEndPart >= 0; 
      var stopJumpUp = pageEndPart > pageStopPortion; 

      var scrollingForward = event.deltaY > 0;
      if (  ( scrollingForward && canJumpDown && !stopJumpDown) 
         || (!scrollingForward && canJumpUp   && !stopJumpUp)) {
        event.preventDefault();
        scrollToPage();
      } 
   } else {
     event.preventDefault();
   }    
  });
}
new ScrollHandler('header-section'); 
new ScrollHandler('gallery-section');
new ScrollHandler('about-section');
new ScrollHandler('projects-section');


// FADEIN IMAGES ANIMATION ON SCROLL
$(function(){ 
  $('.monster').fadeIn('slow');
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadein-animation').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1500);
            }
        });
    });
});

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});

  $('.hamburger').on('click', function(){
    $('.menu').toggleClass('menu-hide');
});
});


