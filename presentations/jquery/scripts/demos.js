(function($) {
  $.fn.selectSpan = function() {

    this
      .find('select')
      .bind('change.ss', function() {
        $(this).addClass('js-hide')
          .next().text($(this).val()).removeClass('js-hide');
      }).trigger('change.ss')

        .next().bind('click.ss', function() {
          $(this).addClass('js-hide')
            .prev('select').removeClass('js-hide');
        });

    return this;
  };
})(jQuery);



$(document).ready(function() {

  /** =table gotchas
  ************************************************************/

  $('.select-span').selectSpan();

  $('button.row-slide').click(function() {
    $('tr.' + this.id).slideToggle(800);
  });

  $('button.cell-slide').click(function() {
    var desc = this.id == 'r1' ? '' : ' td';
    $('tr.' + this.id + ' td').slideToggle(800);
  });

  $('button.row-div-slide').click(function() {
    var rowClass = 'tr.' + this.id;
    $(rowClass + ', ' + rowClass + ' > td > div').slideToggle(800);
  });

  $('button.row-fade').click(function() {
    $('tr.' + this.id).animate({opacity: 'toggle'}, 800);
  });


  $('button.row-animate-lh').click(function() {
    $('tr.' + this.id).animate({lineHeight: 'toggle'}, 800);
  });

  /** =callbacks
  ************************************************************/

  var slideLog = $('#unexpected_callback_demo div.log');
  function myCallback() {
    slideLog.append('<div>called after slideDown</div>');
  }

  $('#slidedown').click(function() {
    $('div.cb').slideDown(400, myCallback);
  });

  $('#slideup').click(function() {

    $('div.cb').slideUp(1000, function() {
      slideLog.append('<div>called after slideUp</div>');
    });
  });

  $('#slidetoggle').click(function() {

    $('div.cb').slideToggle(function() {
      slideLog.append('<div>called after slideToggle</div>');
    });
  });

  /** =easing
  ************************************************************/
  $('#easing_demo')
  .click(function(event) {
    var $demo = $(this),
        $tgt = $(event.target);

    if ( $tgt.closest('button').length ) {
      $demo.find('div.demodiv').each(function() {

        $(this).slideToggle( 1000, $(this).find('span').text() );
      });
    }
  });


  /** =duration, easing, and callback
  ************************************************************/
  $('#combo').click(function() {
    $(this).parent().prev().fadeOut({
      duration: 800,
      easing: 'linear',
      complete: function() {
        $(this).fadeIn(750);
      }
    });
  });


  /** =slide oppositively
  ************************************************************/
  $('#opposite-day').click(function() {
    $('div.slidy').slideToggle(1200);
  });

  /** =$.fn.interval
  ************************************************************/
  $('#interval-btn').click(function() {
    var interval = $('#interval-list').val() * 1;
    $.fx.interval = interval;
    $(this).parent().find('.demodiv').slideToggle(1400);
  });

  /** =CUSTOM ANIMATIONS
  ************************************************************/
  /** =interactive demo **/
  $('form.iademo').each(function() {
    var $thisDemo = $(this),
        $props = $thisDemo.find('span.props'),
        $vals = $thisDemo.find('span.vals'),
        len = Math.max($props.length, $vals.length);

    $thisDemo.submit(function(event) {
      event.preventDefault();
      var aniprops = {};
      for (var i=0; i < len; i++) {
        aniprops[$props.eq(i).children().val() || 'height'] = $vals.eq(i).children().map(function() {
          return $(this).val();
        }).get().join('') || '20px';

      }
      $thisDemo.find('div.bar').animate(aniprops, 800);
    });
  });

  $('div.special-easing').each(function(index) {
    var $easingDiv = $(this);
    var $ball = $easingDiv.find('div.demodiv');
    $easingDiv.find('button').click(function() {
      var $button = $(this), hit = false;
      var mystep = this.id != 'step-option' ? $.noop : function() {
        if (!hit && 298 <= $ball.height() + parseFloat($ball.css('top')) + parseFloat($ball.css('marginTop')) ) {
          $button.after('<b>SMACK!</b>');
          hit = true;
        }
      };
      $easingDiv.find('div.demodiv').animate({
        left: '300px',
        top: '245px',
        width: 0,
        height: 0,
        marginTop: '55px'
      }, {
        duration: 5000,
        easing: 'linear',
        specialEasing: {
          left: 'easeOutQuad',
          top: 'easeOutBounce'
        },
        complete: function() {
          $(this).css({top: 0, left: 0, height: '55px', width: '55px', marginTop: 0});
        },
        step: mystep
      });
    });
  });

  /** =STOP AND GO
  ************************************************************/

  /** =Queue **/
  var $queuewrap = $('#queuewrapper'),
      $queue1 = $queuewrap.find('.demodiv').eq(0),
      $queue2 = $queuewrap.find('.demodiv').eq(1);

  var greenify = function(next) {
    $(this).css({backgroundColor: '#090'});
    next();
  };
  var slideFirst = function(next) {
    $queue1.slideToggle();
    next();
  };
  var slideSecond = function(next) {
    $queue2.slideToggle().queue(greenify);
    next();
  };

  $queuewrap.find('button').click(function() {
    $queue1
    .queue(slideFirst)
    .queue(greenify)
    .queue(slideSecond);
  });

  /** =:animate selector **/
  $('#fadeinout').click(function() {
    var $div1 = $('#inoutwrap').find('div.demodiv').eq(0);
    var $div2 = $('#inoutwrap').find('div.demodiv').eq(1);
    $div1.fadeIn().fadeOut();
    if ( !$div2.is(':animated') ) {
      $div2.fadeIn().fadeOut();
    }
  });

  /** =.stop() method **/
  $('#nav1 > li').bind('mouseenter mouseleave', function(event) {
    var $drop = $(this).children('ul');
    if ( event.type === 'mouseenter' ) {
      $drop.slideDown(800);
    } else {
      $drop.slideUp(800);
    }
  });

  $('#nav2 > li').bind('mouseenter mouseleave', function(event) {
    var $drop = $(this).children('ul');
    if ( event.type === 'mouseenter' ) {
      $drop.stop(false, true).slideDown(800);
    } else {
      $drop.stop(true, true).slideUp(800);
    }
  });

  $('#nav3 > li').bind('mouseenter mouseleave', function(event) {
    var $drop = $(this).children('ul');
    if ( event.type === 'mouseenter' ) {
      $drop.stop(true, true).slideDown(800);
    } else {
      $drop.stop(true, false).slideUp(800);
    }
  });


  $('#nav4 > li')
  .bind('mouseenter mouseleave', function(event) {
    var $drop = $(this).children('ul'),
        dropHeight = $drop.data('height');
    if (!dropHeight) {
      $drop.css({visibility: 'hidden',display: 'block'}).data('height', $drop.height())
      .css({visibility: 'visible', display: 'none'});
      dropHeight = $drop.data('height');
    }

    if ( event.type === 'mouseenter' ) {
      $drop.stop(true, true).css('height', dropHeight).slideDown(800);
    } else {
      $drop.stop(true, false).slideUp(800);
    }
  });


  // delays
  $('#delayer').click(function() {
    $('#delayee').fadeIn(800).delay(3000).fadeOut(600);
  });

  $('#delayezr').click(function() {
    $('#delayez')
    .css('backgroundColor', '#D44314')
    .fadeIn(800)
    .delay(1500)
    .queue(function(next) {
      $(this).css('backgroundColor', '#090');
      next();
    })
    .delay(1500)
    .fadeOut(600);
  });

  $('#toggle-ani').click(function() {
    $.fx.off = !$.fx.off;
    var premsg = "Global effects are ";
    var onoff = $.fx.off ? '<b>off</b>' : '<b>on</b>';
    $(this).next().html(premsg + onoff);
  });

    $('#me-too').prev().click(function() {
      $(this).next().fadeIn(backout);
    });

    function backout() {
      var self = this;
      setTimeout(function() {
        // you probably don't want to use "this" here.
        $(self).fadeOut();
      }, 2000);
    }


  /** =Repeating callbacks
  ************************************************************/
  $('#repeat').click(function() {
    var $sequence = $('div.sequence'),
        index = 0;

    (function sequencer() {
        $sequence.eq(index++)
        .animate({opacity: 'toggle'}, 'slow', sequencer);
    })();
  });

  $('#pulser').click(function() {
    var $pulse = $('div.pulse'),
        index = 0,
        total = 10;

    (function pulse() {
      if (index++ < total) {
        $pulse
        .animate({opacity: 'toggle'}, pulse);
      }
    })();
  });

  var colors = ['#900', '#090', '#009', '#cc0', '#0cc', '#c0c'];
  var pulseOpts = {
    total: 9,
    duration: 489,
    complete: function(i) {
      this.style.backgroundColor = colors[i % 6];
    }
  };
  $('#pulseer').click(function() {
    $('div.pulsee').slice(0,5).pulsee(11);
    $('div.pulsee').slice(5).pulsee(pulseOpts);
  });

  /** =custom properties
       courtesy of John Resig
  ************************************************************/

  $.fx.step.corner = function(fx) {
    fx.elem.style.left = fx.now + fx.unit;
    fx.elem.style.top = fx.now + fx.unit;
  };

  // usage
  $('#cornerify').click(function() {
    $('#cornered').animate({corner: '40px'}, 500);
  });

  $.fx.step.leftTop = function(fx) {
    fx.elem.style.left = fx.now + fx.unit;
    fx.elem.style.top = fx.now + fx.unit;
  };

  // additional modification to start from a point other than 0 ...
  var _oldcur = jQuery.fx.prototype.cur;
  jQuery.fx.prototype.cur = function( force ) {

    if (this.prop == 'leftTop') {
      // change this.prop to 'left'
      var r = parseFloat(jQuery.css(this.elem, 'left', force));
  		return r && r > -10000 ? r : parseFloat(jQuery.curCSS(this.elem, 'left')) || 0;
    }

    return _oldcur.call(this, force);
  };

  // usage
  $('#left-topify').click(function() {
    $('div.cornered').animate({corner: '+=40px'}, 500);
    $('div.left-topped').animate({leftTop: '+=40px'}, 500);
  });


  $('#under_the_hood_shortcuts pre.javascript').attr('contenteditable', true).bind('click keyup', function(event) {
    event.stopPropagation();
  });

  $.addLink({href: '/jqcon2010/scripts/ui/css/ui-lightness/ui.css'});
  $('pre.javascript').not('.inline').trigger('resizer');

});


/** =sliding panels
************************************************************/

$(document).bind('panelHandler', function(event, options) {

  var $link = $(event.target),
      $li = $link.parent('li'),
      $thisPanel = $link.closest('.panel'),
      $nextPanel = $thisPanel.next();

  if (!$nextPanel.length) { return; }

  if ( $nextPanel.is('.expanded') ) {
   var differentItem = !$li.is('.active');
    var afterAll = function() {
      $nextPanel.find('.active').removeClass('active');

      if ( differentItem ) {
        window.setTimeout(function() {
          $nextPanel.slideWays(800);
        }, 10);
      }
    };
    $thisPanel.nextAll('.expanded').closePanels(afterAll);

  } else {
    $nextPanel.slideWays(800);
  }

  // make this list item the active one and remove the active class from this item's siblings
  $li.toggleClass('active', differentItem).siblings('.active').removeClass('active');


});

$(document).ready(function() {
  var $panels = $('div.panel'),
      pz = $panels.eq(0).css('zIndex') || 50;

  var panelSetup = function() {

    var panelWidths = $panels.map(function(index, elem) {
      return $(this).outerWidth();
    }).get();

    $panels.slice(1).css({
      left: function(index, val) {
        var idx = index + 1;
        return sum(panelWidths.slice(0,idx)) - panelWidths[idx];
      },
      zIndex: function(index, val) {
        return pz-index-1;
      },
      opacity: 0.1
    });
    panelSetup = $.noop;
  };

  $panels.delegate('a', 'click', function(event) {
    panelSetup();
    event.preventDefault();
    if ( !$panels.is(':animated') ){
      $(this).trigger('panelHandler');
    }
  });


  function sum(arr) {
    var tally = 0;
    for (var i=0, al = arr.length; i < al; i++) {
      tally += arr[i];
    }
    return tally;
  }


});



