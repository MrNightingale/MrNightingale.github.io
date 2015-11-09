for (var i = 0; i < 10; i++) {

    setTimeout(function(i) {
        console.log(i);
    }, 0 , i);

//    (function(i) {
//
//        setTimeout(function(){
//            console.log(i);
//        }, 0);
//
//    }(i));

}