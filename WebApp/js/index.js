

var mainSwipeManager = new Hammer.Manager(document.body);
mainSwipeManager.add(new Hammer.Swipe({threshold: 150, pointers: 1}));
mainSwipeManager.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
mainSwipeManager.on('swipedown', function() {
	$('#map-container').css("pointer-events","none");
	var mapUnBlur = anime({
				  targets: '#map-container',
				  filter: 'blur(8px)',
				  zIndex: 0,
				  duration: 500,
				  easing: 'easeInOutQuad'
				});
	
	var contentBack = anime({
				  targets: '#main-content .el',
				  zIndex: 1,
				  duration: 500,
				  easing: 'easeInOutQuad'
				});
});
mainSwipeManager.on('swipeup', function() {
	$('#map-container').css("pointer-events","visible");
	var mapUnBlur = anime({
				  targets: '#map-container',
				  filter: 'blur(0px)',
				  zIndex: 1,
				  duration: 500,
				  easing: 'easeInOutQuad'
				});
	var contentBack = anime({
				  targets: '#main-content .el',
				  zIndex: 0,
				  duration: 500,
				  easing: 'easeInOutQuad'
				});
});


var confirmManager = new Hammer.Manager(document.body);
confirmManager.add(new Hammer.Swipe({threshold: 30, pointers: 1}));
confirmManager.on('swiperight', function() {
	var colorChangeGood = anime({
				  targets: '.confirm',
				  backgroundColor: '#5BB0FF',
				  boxShadow: '0 0 30px rgba(91, 176, 255, 0.6)',
				  duration: 500,
				  easing: 'easeInOutQuad'
				});
	var wordsSlide = anime({
				  targets: '#step1',
				  // translateX: '500px',
				  color: '#FFFFFF',
				  duration: 500,
				  easing: 'easeInOutQuad'
				});
});
confirmManager.on('swipeleft', function() {
	var colorChangeBad = anime({
				  targets: '.confirm',
				  backgroundColor: '#FFA1AC',
				  boxShadow: '0 0 30px rgba(255, 161, 172, 0.6)',
				  duration: 500,
				  easing: 'easeInOutQuad'
				});
	$('.hidden').toggleClass('hidden');
	$('#step1').toggleClass('hidden');
	var wordChange = anime({
				  targets: '.inline',
				  color: '#FFFFFF',
				  duration: 500,
				  easing: 'easeInOutQuad'
	});
	
});


// var confirmTimeline = anime.timeline();

// confirmTimeline
//   .add({
//     targets: '.confirm',
//     backgroundColor: '#5BB0FF',
// 	duration: 500,
// 	easing: 'easeInOutQuad'
//     offset: 0 // Starts at 1000ms of the timeline
//   })
//   .add({
//     targets: '#step1',
// 	// translateX: '500px',
// 	color: '#FFFFFF',
// 	duration: 500,
// 	easing: 'easeInOutQuad'
//     offset: 0 // Starts at 500ms of the timeline
//   })
//   .add({
//     targets: '.confirm',
//     backgroundColor: '#FFFFFF',
// 	duration: 500,
// 	easing: 'easeInOutQuad'
//     offset: 700 // Starts at 0ms of the timeline
//   })
//   .add({
//     targets: '#step1',
// 	translateX: '500px',
// 	duration: 500,
// 	easing: 'easeInOutQuad'
//     offset: 0 // Starts at 500ms of the timeline
//   });





// var mapBlur = anime({
//   targets: '#map',
//   filter: 'blur(8px)',
//   z-index: 0,
//   easing: 'easeInOutQuad'
// });





// var contentFront = anime({
//   targets: '#main-content .el',
//   z-index: 1,
//   easing: 'easeInOutQuad'
// });