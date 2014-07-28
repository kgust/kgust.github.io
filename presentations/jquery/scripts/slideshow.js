(function($) {
var $doc = $(document);
$('a').live('click', function() {
  var thisHref = $(this).attr('href');

  if ( (thisHref && this.hostname != location.hostname) || (/^\//).test(thisHref)) {
    window.open(thisHref);
    return false;
  }
});

$doc.ready(function() {
  var $vis;
  var slideshow = {
    init: function() {
      /* code highlighting */

       $('pre').chili();

      /* slideshow */
      $('.slide').hide().each(function(index) {
        if (!this.id) {
          this.id = 'slide-' + index;
        }
      });

      $vis = $(location.hash ? '#' + location.href.split(/#\/?/)[1] : '.slide:first').show();
      /* $vis = $('.slide:visible'); */

      /* history management */
      $.address.change(function(event) {
        if (!location.hash) { return true; }
        var slideId = '#' + $.address.path().replace(/^\//, '');
        if ($(slideId).is(':hidden')) {
          $doc.trigger('advance', {slide: slideId});
        }
      });
      
      $('#loading-slide').remove();
    }
  };

  slideshow.init();
  
	var regSlideNumber = /^\d+$/;
	var regSlideId = /^#/;

  /* slide management */
  
	$doc.bind('advance', function(event, options) {
	  var dir = options.direction || 'next',
	      slide = options.slide || null;

    $vis = $('.slide:visible');
    var $nextSlide = gotoSlide({slide: slide, visible: $vis, direction: dir});
    
    
    if ($nextSlide.length && !$nextSlide.is(':visible') && !$vis.is(':animated')) {

        tocActive($nextSlide);
        
        $vis.fadeOut();
        $nextSlide
        .fadeIn(400, function() {
          $.address.value($nextSlide[0].id);
        })
          .find('.step-done').removeClass('.step-done');

        /* $vis.slideUp(400, function() {
          $nextSlide
          .slideDown(400, function() {
            $.address.value($nextSlide[0].id);
          })
            .find('.step-done').removeClass('.step-done');          
        }); */
    } else {
      advanceStep({visible: $vis, direction: dir});
    }

	});
	
  function gotoSlide(options) {
    var $vis = options.visible;
    /* go directly to a slide */
    if ( regSlideNumber.test(options.slide) ) {
      return $('div.slide:eq(' + options.slide + ')');
    } else if ( regSlideId.test(options.slide) ) {
      return $(options.slide);
    }

    /* go to previous or next slide if no steps in visible slide */
    if (!$vis.find('.step').length) {
      return $vis[options.direction]('.slide');
	  }
    /* go to next slide */
    if ( ($vis.find('.step').length == $vis.find('.step-done').length)  && 
      options.direction == 'next' 
    ) {
      return $vis.next('.slide');
    }

    /* go to previous slide */
    if ( !$vis.find('.step-done').length && options.direction == 'prev') {
      return $vis.prev('.slide');
    }

    return $([]);
	}

  function advanceStep(options) {
    if (options.direction == 'next') {
      options.visible.find('.step:not(.step-done):first').addClass('step-done');
    } else if (options.direction == 'prev') {
      options.visible.find('.step-done:last').removeClass('step-done');
    }
  }

  /* trigger previous and next on key events */
  
  $doc.bind('keyup', function(event) {
    if ($(event.target).is('input, button')) { return false; }
    if (event.which == 37) {
      $doc.trigger('advance', {direction: 'prev'});
    } else if (event.which == 39 || event.which == 13) {
      $doc.trigger('advance', {direction: 'next'});
    }
  });
    
  
  /* TABLE OF CONTENTS */

  function toc() {
    var $toc = $('<ul class="group"></ul>'),
  	    tocItems = [];

  	$('.slide').each(function(index) {

      tocItems.push('<li><a href="#' + this.id + '" title="' + $(this).find('h1').text() + '">' + (index + 1) + '</a></li>');
  	});
    $toc.html(tocItems.join(''));

    if (!$('.toc').length) {
      $('<div class="toc"></div>')
      .prepend('<span class="indicator ui-icon ui-icon-circle-plus"></span>')
      .append($toc)
      .appendTo('body');
    }
    var enterDelay, leaveDelay;
    $toc.parent().height($toc.parent().height())
    .bind('mouseenter mouseleave', function(event) {
      if (event.type == 'mouseenter') {
        clearTimeout(leaveDelay);
        enterDelay = setTimeout(function() {
          $toc.stop(true, true).slideDown();
          $('.indicator').removeClass('ui-icon-circle-plus').addClass('ui-icon-circle-minus');
        }, 120);
      } else if (event.type == 'mouseleave'){
        clearTimeout(enterDelay);
        leaveDelay = window.setTimeout(function() {
          $toc.stop(true, true).slideUp();
          $('.indicator').removeClass('ui-icon-circle-minus').addClass('ui-icon-circle-plus');
        }, 1000);
      }
    })
      .find('ul').css({position: 'absolute', display: 'none'});

    $toc.find('a').live('click', function() {
      if (this.hash) {
        $doc.trigger('advance', {slide: this.hash});
      } else if (this.value) {
        location.href = this.value;
      }
      $(this).blur();
      return false;
    });

    tocActive($vis);
  }
  
  function tocActive(selector) {
	  $('.toc a.ui-state-active').removeClass('ui-state-active');
    $('.toc a').eq(+$('.slide').index(selector)).addClass('ui-state-active');
	}

  $(window).bind('load', toc);
});


})(jQuery);