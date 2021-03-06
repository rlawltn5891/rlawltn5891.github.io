// mywedding.js



$(function() {
// start --------------------------------------------
// bannerBox 변수 할당
var slideBanner = $('#addBanner'), // 슬라이드 배너
		slideBannerWidth = slideBanner.width(),
	  bannerBox = 	$('.bannerBox'),
	  bannerBoxLi = bannerBox.find('li').length,
		bannerBoxLiWidth = bannerBox.find('li').width(slideBannerWidth+'px'),
		bannerBoxWidthSet = slideBannerWidth * (bannerBoxLi+1),
		delayTime = 100;
		running = 2000;

// banner갯수파악후 indicator 생성
var slideIndiCator = slideBanner.append('<ol class="indicator">');
	

// indicator 변수 할당
var indicator = $('.indicator');

// 선택 인디케이터 class 기능추가
var IndiClass = function() {
	indicator.find('li').not('li:first').attr({style:null}).css({transition:'all 0.3s'});
	$('.indiClass').css({width:'4rem',
	                     borderRadius:'2rem',
	                     transition:'all 0.3s',
	                     backgroundColor:'#662727'});
};



	// indicator는 배너의 갯수만큼 자동 생성되도록 처리!!
for(var i=0; i<bannerBoxLi; i++ ){
	indicator.append('<li><a href="#" role="button">');
	// console.log(i);
}

// --------------------
		bannerBox.width(bannerBoxWidthSet +'px'); // 배너의 박스 넓이
		bannerBox.find('li:last').clone().prependTo(bannerBox);
		indicator.find('li:last').clone().prependTo(indicator);

		// indicator 처음 복제된 버튼 숨기기, 1번 버튼색처리
		indicator.find('li:first').hide();
		// indicator.find('li').eq(1).css({backgroundColor:'#f4a'});
		indicator.find('li').eq(1).addClass('indiClass');
		IndiClass();
// indicator버튼 클릭시 banner 이동하여 위치

	indicator.find('li').on('click', function(e) {
		e.preventDefault();
		var $this = $(this),
        index = $this.index();
    $this.addClass('indiClass');
    indicator.find('li').not($this).removeClass('indiClass');
    bannerBox.stop().delay(delayTime).animate({marginLeft:-100 * index +'%'});
    IndiClass();
	});

// slideBanner 버튼 클릭시 연속클릭에의한 오류를 방지하기위해 간단히 숨김처리
slideBanner.find('button').on('click',function() {
	var $this = $(this);
		$this.stop().fadeOut(20, function() {
			$this.delay(300).stop().fadeIn(20);
		});

});

// $('lbtn') 클릭시 배너 이동
var lbtn = $('.lbtn');
	
	lbtn.on('click', function(e) {
		e.preventDefault();
		var bannerBoxMargin = parseInt(bannerBox.css('marginLeft')),
				bannerIndex = Math.abs(parseInt(bannerBoxMargin / slideBannerWidth))-1;
				console.log(bannerIndex);

		if(bannerBoxMargin == -slideBannerWidth){
			bannerBox.stop().delay(delayTime).animate({marginLeft:'+='+ slideBannerWidth},
				function() {
					bannerBox.css({marginLeft:-slideBannerWidth*bannerBoxLi});
				});	
		}else{
			bannerBox.stop().delay(delayTime).animate({marginLeft:'+='+ slideBannerWidth});	
		}


		// indicator navi 위치 찾아가기
		if(bannerIndex >= 0){
			bannerIndex = bannerBoxLi;
		}
			indicator.find('li').removeClass('indiClass');
			indicator.find('li').eq(bannerIndex).addClass('indiClass');
			IndiClass();
	});

// $('rbtn') 클릭시 배너 이동
var rbtn = $('.rbtn');
	rbtn.on('click', function(e) {
		e.preventDefault();
		var bannerBoxMargin = parseInt(bannerBox.css('marginLeft')),
				bannerIndex = Math.abs(parseInt(bannerBoxMargin / slideBannerWidth))+1;
				console.log(bannerIndex);

		if(bannerBoxMargin <= (-slideBannerWidth*bannerBoxLi)){
			bannerBox.stop().css({marginLeft:0});
			bannerBox.stop().delay(delayTime).animate({marginLeft:-slideBannerWidth});
		}else{	
			bannerBox.stop().delay(delayTime).animate({marginLeft:'-='+ slideBannerWidth});
		}
	if(bannerIndex == bannerBoxLi+1){
			bannerIndex = 1;
		}
			indicator.find('li').removeClass('indiClass');
			indicator.find('li').eq(bannerIndex).addClass('indiClass');
			IndiClass();
	});
// 배너영역 넘침 숨김처리
slideBanner.css({overflow:'hidden'});

// 자동 배너 움직임처리
var startTime;
var setTime = function() {
		return startTime = setInterval("$('.rbtn').click()", running);
};
var clearTime = function() {clearInterval( startTime )};

slideBanner.on({'mouseenter':clearTime, 'mouseleave':setTime});
setTime();



// end-----------------------------------------------
});