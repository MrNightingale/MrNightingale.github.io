"use strict";var loader=new DomEl("body.load");window.addEventListener("load",function(){setTimeout(function(){loader.addClass("hideLoad")},100),setTimeout(function(){loader.removeClass("load").removeClass("hideLoad")},600)});