
$(document).ready(function() {

    $('#lakehouse').hide();
    $('#tab-wrap2').hide();
    $('#tab-wrap3').hide();

    // Slider
    $('.movie-image-ad-link').click(function() {
        $('.movie-logo').hide();
        $('#lakehouse').show();
    });

    $('.movie-image-ad-right').click(function() {
        $('.movie-logo').toggle();
    });

    $('.movie-image-ad-left').click(function() {
        $('.movie-logo').toggle();
    });

    // Tabs
    $('#tab1').click(function() {
        $('#tab1').addClass('active-tab');
        $('#tab2').removeClass('active-tab');
        $('#tab3').removeClass('active-tab');
        $('#tab-wrap1').show();
        $('#tab-wrap2').hide();
        $('#tab-wrap3').hide();
    });

    $('#tab2').click(function() {
        $('#tab2').addClass('active-tab');
        $('#tab1').removeClass('active-tab');
        $('#tab3').removeClass('active-tab');
        $('#tab-wrap2').show();
        $('#tab-wrap1').hide();
        $('#tab-wrap3').hide();
    });

    $('#tab3').click(function() {
        $('#tab3').addClass('active-tab');
        $('#tab1').removeClass('active-tab');
        $('#tab2').removeClass('active-tab');
        $('#tab-wrap3').show();
        $('#tab-wrap1').hide();
        $('#tab-wrap2').hide();
    });

});