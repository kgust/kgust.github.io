$(window).bind('load', function(event) {
  
  /* silly blink tag gimmick */
  $('blink').live('click', function() {
    $(this).replaceWith('<em>' + $(this).text() + '</em>');
  });

  /* convert email address */
  $('.email').each(function() {
    var email = $(this).text().split('@');
    $(this).html(email[1] + '@' + email[0]);
  });

  /* THEMEROLLER Ready */
  var placeholders;
  $.trReady = function() {
    if (!placeholders) {
      $('.feature-wrapper').addClass('fwp');
      $('.feature').addClass('fp');
      placeholders = true;
    }
    var $slide = $('.slide');
    $slide.toggleClass('ui-widget').toggleClass('ui-widget-content');
    $slide.find('h1').toggleClass('ui-widget-header');

    $slide.find('.fwp')
    .toggleClass('feature-wrapper');

    $slide.find('.fwp, ul')
    .toggleClass('ui-widget-content')
    .toggleClass('ui-corner-all');

    $slide.find('.fp').toggleClass('feature');
    $('.toc a').toggleClass('ui-state-default').toggleClass('ui-corner-all');
  };  
});
$(document).ready(function() {
	if (typeof $.fn.media == 'undefined') { return; }
  $.fn.media.defaults.mp3Player = '/media/singlemp3player.swf';
  $('a.media').media({
    width: 750,
    height: 24,
    bgColor: '#F4F3EB'
  });
  $('embed, object').css({display: 'inline'}).each(function(index) {
    this.setAttribute('width', 36);
  });
  
});

/* 


$.slideshow.filepath = '/slide-groups/',
$.slideshow.files = [
   'js-background.php',
  'jquery-background.php',
  'get-started.php',
  'extras.php' 
],
$(document).bind('loadSlides', function(event, slides) {
  var i = 0, fl = slides.files.length, path = slides.filepath;
  
  var $loadingSlide = $('<div id="loading-slide" class="slide intro"><p class="muted">files to load &hellip;</p><h1 class="xl">' + fl + '</h1></div>').prependTo('body').find('h1');

  var loadSlides = function() {
    if (i < fl) {
      $.get(path + slides.files[i], function(data) {
        $(data).insertAfter('.slide:last');
        loadSlides(++i);
        $loadingSlide.text(fl-i); 
      });      
    } else {
      $loadingSlide.text('1');
      slides.init();
    }
  };
  
  loadSlides();
}); 

if ($.slideshow.files.length) {
  $doc.trigger('loadSlides', slideshow);
} else {
  slideshow.init();
}
*/
