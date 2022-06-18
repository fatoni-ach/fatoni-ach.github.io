//animation powered by GSAP JS
//http:www.greensock.com/gsap-js/


$(".animation-3d").each(function(index, element){
    var animation = TweenMax.to(this, 0.2, {
        className: '+= superShadow',
        marginTop: '-10px',
        marginBottom: '10px',
        ease: Power1.easeIn,
        paused:true
    });
    element.animation = animation;
})
  
  
$(".animation-3d").hover(function(){
   this.animation.play()
}, function(){
   this.animation.reverse();
})

$(".animation-hover").each(function(index, element){
    var animationHover = TweenMax.to(this, 0.2, {
        className: '+= hover-animation',
        marginTop: '-10px',
        marginBottom: '10px',
        ease: Power1.easeIn,
        paused:true
    });
    element.animation = animationHover;
})

$(".animation-hover").hover(function(){
    this.animation.play()
 }, function(){
    this.animation.reverse();
 })
  