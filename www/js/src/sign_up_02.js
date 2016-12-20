//sign_up_02.js

//input [type=submit] 링크걸기

var ok= $('[type="submit"]');

ok.on('click',function(e){
    e.preventDefault();
    location.href="./index.html"
});
