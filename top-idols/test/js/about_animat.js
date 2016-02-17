
'use strict';var numbers=new $('.p-about .header .counters .counter .number');var requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var starts=[null,null,null];function addNull(number){var str=''+number;if(str.length==1){str='00'+str;}else if(str.length==2){str='0'+str;}
return str;}
function numberFormat(number){var result='';while(number!=0){var currentPart=number%1000;number=Math.floor(number/1000);if(currentPart<1000&&number!=0){currentPart=addNull(currentPart);}
result=currentPart+' '+result;}
return result.trim();}
function step(el,finishValue,duration,start){requestAnimationFrame(function(timestamp){if(!start){start=timestamp;}
var currentValue=parseInt(el.text().replace(' ',''));if(currentValue<finishValue){var perTick=Math.floor((finishValue-currentValue)/duration*50);el.text(numberFormat(currentValue+perTick));duration-=10;if(timestamp-start<duration*1000){step(el,finishValue,duration,start);}}else{el.text(numberFormat(finishValue));}});}
var durations=[1000,2500,2000];window.addEventListener('load',function(){setTimeout(function(){numbers.each(function(el,idx){var currentValue=parseInt(el.text().replace(' ',''));el.text(0);step(el,currentValue,durations[idx],starts[idx]);});},400);});