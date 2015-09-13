$(document).ready(function() {
    $('#zoom1').click(function() {
        $('#image1').addClass('active');
        $('.zoom-container').show();
    });

    $('#zoom2').click(function() {
        $('#image2').addClass('active');
        $('.zoom-container').show();
    });

    $('#zoom3').click(function() {
        $('#image3').addClass('active');
        $('.zoom-container').show();
    });

    $('#zoom4').click(function() {
        $('#image4').addClass('active');
        $('.zoom-container').show();
    });

    $('#zoom5').click(function() {
        $('#image5').addClass('active');
        $('.zoom-container').show();
    });

    $('#zoom6').click(function() {
        $('#image6').addClass('active');
        $('.zoom-container').show();
    });

    $('.exit-cross').click(function() {
        $('#image1').removeClass('active');
        $('#image2').removeClass('active');
        $('#image3').removeClass('active');
        $('#image4').removeClass('active');
        $('#image5').removeClass('active');
        $('#image6').removeClass('active');

        $('.zoom-container').hide();
    });
});