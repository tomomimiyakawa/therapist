$(function(){
gsap.registerPlugin(SplitText);

var $copyContainer = $(".copy-container"),
    $replayIcon = $('#cb-replay'),
    $copyWidth = $('.copy-container').find('p').width();

var mySplitText = new SplitText($copyContainer, {type:"chars"}),
    splitTextTimeline = gsap.timeline();
var handleTL = gsap.timeline();

// WIP - need to clean up, work on initial state and handle issue with multiple lines on mobile

gsap.delayedCall(0.2, function(){
  animateCopy();
  blinkHandle();
});

function animateCopy() {
  gsap.set(mySplitText.chars, {autoAlpha:0});
  splitTextTimeline.from(mySplitText.chars, {duration: 0.5, autoAlpha:0, stagger: 0.2, onComplete: function(){
    animateHandle()
  }});
}

function blinkHandle() {
  handleTL.fromTo('.handle', {duration: 0.4, autoAlpha:0},{autoAlpha:1, repeat:-1, yoyo:true}, 0);
}

function animateHandle() {
  handleTL.to('.handle', {duration: 0.7, x:$copyWidth, ease:"steps(12)"}, 0.05);
}

$('#cb-replay').on('click', function(){
  splitTextTimeline.restart()
  handleTL.restart()
})
});