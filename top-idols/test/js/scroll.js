
function log(txt) {
	

  if(txt>-600){
  document.getElementById("one").style.width ='30px';
  document.getElementById("one").style.BackgColor ='#ffffff';
  }
  else {
   document.getElementById("one").style.width ='15px';
  document.getElementById("one").style.BackgColor  ='#aaaaaa';
}
 if(txt<-600 && txt>-1200){
  document.getElementById("two").style.width ='30px';
  document.getElementById("two").style.BackgColor ='#ffffff';
  }
  else {
   document.getElementById("two").style.width ='15px';
  document.getElementById("two").style.BackgColor  ='#aaaaaa';
}
 if(txt<-1200 && txt>-1800){
  document.getElementById("three").style.width ='30px';
  document.getElementById("three").style.BackgColor ='#ffffff';
  }
  else {
   document.getElementById("three").style.width ='15px';
  document.getElementById("three").style.BackgColor  ='#aaaaaa';
}
 if(txt<-1800 && txt>-2400){
  document.getElementById("four").style.width ='30px';
  document.getElementById("four").style.BackgColor ='#ffffff';
  }
  else {
   document.getElementById("four").style.width ='15px';
  document.getElementById("four").style.BackgColor  ='#aaaaaa';
}
 if(txt<-2400 && txt>-3000){
  document.getElementById("five").style.width ='30px';
  document.getElementById("five").style.BackgColor ='#ffffff';
  }
  else {
   document.getElementById("five").style.width ='15px';
  document.getElementById("five").style.BackgColor  ='#aaaaaa';
}
 if(txt<-3000 && txt>-3600){
  document.getElementById("six").style.width ='30px';
  document.getElementById("six").style.BackgColor ='#ffffff';
  }
  else {
   document.getElementById("six").style.width ='15px';
  document.getElementById("six").style.BackgColor  ='#aaaaaa';
}
 if(txt<-3600 && txt>-4200){
  document.getElementById("seven").style.width ='30px';
  document.getElementById("seven").style.BackgColor ='#ffffff';
  }
  else {
   document.getElementById("seven").style.width ='15px';
  document.getElementById("seven").style.BackgColor  ='#aaaaaa';
}
 if(txt<-4200 && txt>-4800){
  document.getElementById("eight").style.width ='30px';
  document.getElementById("eight").style.BackgColor ='#ffffff';
  }
  else {
   document.getElementById("eight").style.width ='15px';
  document.getElementById("eight").style.BackgColor  ='#aaaaaa';
}
	 if(txt<-4800){
  document.getElementById("nine").style.width ='30px';
  document.getElementById("nine").style.BackgColor ='#ffffff';
  }
  else {
   document.getElementById("nine").style.width ='15px';
  document.getElementById("nine").style.BackgColor  ='#aaaaaa';
}








}







$(function() {
  var eTop = $('#maintext').offset().top; //get the offset top of the element
  log(eTop - $(window).scrollTop()); //position of the ele w.r.t window

  $(window).scroll(function() { //when window is scrolled
    log(eTop - $(window).scrollTop());
  });
});
