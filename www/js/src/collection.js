//collection.js


  $(function(){
			var timed = 500;
			var articleBox = $('#articleBox');
			
        $('.c_box_02').on('click', function(){
           $('#click_on').parent().fadeIn(); 
        });
			
//      ----------------------------------------------   
			$('#click_on').hide();
			$('#click_on').find('ul').hide();
			
			var weddingImg = $('.article_01').find('li');
			weddingImg.on('click',function(e){
					e.preventDefault();
					var articleList = $(this).index();
					var clickOn = $('#click_on');
					console.log(articleList);
					clickOn.fadeIn(timed);
					clickOn.find('#bigImg_01').find('ul').eq(articleList).fadeIn();
			});
			var weddingImg_02 = $('.article_02').find('li');
			weddingImg_02.on('click',function(e){
					e.preventDefault();
					var articleList = $(this).index();
					var clickOn = $('#click_on');
					console.log(articleList);
					clickOn.fadeIn(timed);
					clickOn.find('#bigImg_02').find('ul').eq(articleList).fadeIn();
			});
        
         $('.x_icon').on('click',function(e){
						 e.preventDefault();
            $(this).siblings('div').find('ul').fadeOut();
            $(this).parent().fadeOut();
        });
			
//-------------------------------------------------------------------
    var lbtn = $('#l_btn');	
	lbtn.on('click', function(e) {
		e.preventDefault();
          $('#article').animate({'marginLeft': 0});
	});
			
    var rbtn = $('#r_btn');
	rbtn.on('click', function(e) {
		e.preventDefault();
        $('#article').animate({'marginLeft':-100 + '%'});
	});
      
// 배너영역 넘침 숨김처리
articleBox.css({overflow:'hidden'});
  });