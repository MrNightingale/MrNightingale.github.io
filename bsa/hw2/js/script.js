/**
 * Created by soloviov on 28.05.2016.
 */
$(function() {
    $( "#product" ).keypress(function( event ) {
        if ( event.which == 13 ) {
            event.preventDefault();
            console.log(10);
        }
//        xTriggered++;
//        var msg = "Handler for .keypress() called " + xTriggered + " time(s).";
//        $.print( msg, "html" );
//        $.print( event );
    });
});