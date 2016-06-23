(function ($, window, document, undefined) {

init_animations();

var barduration = .3;
var pagelinkduration = .3;
var plusduration = .4;
var hoverdelay = 150;// ms
var isClicked =false;

var TweenLite = new TimelineLite();
TweenLite.to($('.intro'), 0.5, {top:'0', opacity:1, color:"white", ease:Power2.easeInOut});


function init_animations() {
    console.log('animations initiated');

    initlinkHovers();
    initdialogCircle();

}// init_animations()

function initlinkHovers() {

    jQuery('.hover-bar').hover(function(e){
        var $hovered = jQuery(this);
        var _hovered = $hovered.get(0);
        if(_hovered.isTransitionActive === true) return false;
        _hovered.isTransitionActive = true;

        if(!elem_exists($hovered.find('.transition-bar'))) {
            // create transition-bar
            $hovered.append('<div class="transition-bar"/>');
        }// endif

        var $bar = $hovered.find('.transition-bar');
        var tl = new TimelineMax({onComplete:function(){
            _hovered.isTransitionActive = false;
        }});
        tl.to($bar, barduration * .5, {width:"100%", color:"white", ease:Linear.easeNone});
        tl.to($bar, barduration, {width:'0',left:'100%', color:"white", ease:Expo.easeOut, clearProps:'all'});

    }, function(){});

}// initlinkHovers()

function initdialogCircle(){



    $('.circle').hover(function(){
     //isClicked = false;

     var $hovered = jQuery(this);
     var _hovered = $hovered.get(0);
     if(_hovered.isTransitionActive === true) return false;
     _hovered.isTransitionActive = true;

     var tlRepeat = new TimelineMax({
        //repeat: -1,
        onComplete:function(){
            _hovered.isTransitionActive = false;
        }
     });


       tlRepeat.to($('.dialogCircle'), 0.8, {width:'40px', height:'40px', top: '-10px', left: '-10px', opacity:0, display:'none', color:"white", display: 'block', ease:Power2.easeOut, delay: 0.1, clearProps:'all'});

      // if(!isClicked){
      //   isClicked = true;
      //   tlRepeat.play();
      // } else {
      //   isClicked = false;
      //   tlRepeat.pause();
      // }

      // console.log(isClicked);



    });


  } //initdialogCircle()

})(jQuery, window, document);

if($(window).width() > 1024){
  $(document).mousemove(function(e) {
    $( '.foxy' ).parallax( 80, e );
  });
}

$.fn.parallax = function (resistance, mouse)
  {
  	$el = $( this );

    if(mouse.clientX < 850){
      TweenLite.to( $el, 1,
      {
        x : (( mouse.clientX - (window.innerWidth/2) ) / resistance ),
        rotation:15,
        ease: Power2.easeOut
      });
    } else if(mouse.clientX > 850) {
      TweenLite.to( $el, 1,
      {
        x : (( mouse.clientX - (window.innerWidth/2) ) / resistance ),
        rotation:-15,
        ease: Power2.easeOut
      });
    }
    else if(mouse.clientX >= 609 && mouse.clientX < 700) {
      TweenLite.to( $el, 1,
      {
        x : (( mouse.clientX - (window.innerWidth/2) ) / resistance ),
        rotation:5,
        ease: Power2.easeOut
      });
    }

  }; //swingswingswing
