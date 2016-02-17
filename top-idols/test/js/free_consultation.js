
'use strict';var freeConsultationButtons=new $('.freeConsultationButton');var blockfreeConsultation=new $('.b-freeConsultation');var buttonsClose=blockfreeConsultation.find('.buttonClose');var formFreeConsultation=blockfreeConsultation.find('form.formFreeConsultation');var body=new $(document.body);var number=formFreeConsultation.find('input[name="number"]');function parse(val){return val.trim().replace(/[\(\)-\s]/g,'').trim();}
function formatNumber(val){var num=parse(val);var code=num.slice(0,3);var part1=num.slice(3,6);var part2=num.slice(6,8);var part3=num.slice(8,10);var result='( '+code;if(part1!==''){result+=' ) '+part1;}
if(part2!==''){result+='-'+part2;}
if(part3!==''){result+='-'+part3;}
return result;}
number.on('input',changeNumber);function changeNumber(){if(this.val().length<=2){this.val('( ');}else{this.val(formatNumber(this.val()));}}
number.on('blur',blurNumber);function blurNumber(){if(this.val()=='( '){this.val('');}}
number.on('focus',focusNumber);function focusNumber(){this.val(formatNumber(this.val()));}
freeConsultationButtons.on('click',showFreeConsultation);buttonsClose.on('click',hideFreeConsultation);function showFreeConsultation(){body.addClass('active');blockfreeConsultation.style({display:'block'});}
function showFreeConsultationSuccess(){blockfreeConsultation.attr('class','b-freeConsultation').addClass('success');}
function showLoader(){blockfreeConsultation.attr('class','b-freeConsultation').addClass('loader');}
function showError(){blockfreeConsultation.attr('class','b-freeConsultation').addClass('error');}
function hideFreeConsultation(){body.removeClass('active');blockfreeConsultation.attr('class','b-freeConsultation').addClass('input').style({display:'none'});}
formFreeConsultation.on('submit',function(attributes,event){event.preventDefault();ga('send','pageview','/send');var xhr=new XMLHttpRequest();xhr.addEventListener('loadstart',showLoader);xhr.addEventListener('load',showFreeConsultationSuccess);xhr.addEventListener('error',showError);xhr.addEventListener('loadend',function(event){var response=event.target.response;if(response!='ok'){showError();}},false);xhr.open('POST','/freeConsultation.php');var data=new FormData(event.target);xhr.send(data);});