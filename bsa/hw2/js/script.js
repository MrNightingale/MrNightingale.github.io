/**
 * Created by soloviov on 28.05.2016.
 */
$(function() {

    // add product
    $('#product').keypress(function(event) {

        if (event.which == 13) {
            event.preventDefault();

            var text = $('#product').val();

            $('.checklist__list').append('<div class="checklist__wrapper"><input type="checkbox" id="' + text + '" class="checklist__checkbox"><label class="checklist__text" for="' + text + '">' + text + '</label><div class="checklist__delete"></div></div>');
        }

    });

    // cross out product
    $('.checklist__list').on('click', '.checklist__text', function() {
            $(this).toggleClass('checklist__checkbox--checked');
    });

    // delete product
    $('.checklist__list').on('click', '.checklist__delete', function() {
        $(this).parent().remove();
    });

    // edit product
    $('.checklist__list').on('dblclick', '.checklist__text', function() {
        var text = $(this).text();

        $('<textarea />').appendTo($(this)).val(text).select().keyup(
            function (event) {

                var newText = $(this).val();

                if (event.keyCode == 13) {
                    event.preventDefault();
                    $(this).parent().text(newText).find('textarea').remove();
                }

                if (event.keyCode == 27) {
                    event.preventDefault();
                    $(this).parent().text(text).find('textarea').remove();
                }

            }
        );
    });

    // cross all
    $('.checklist__checkbox').on('click', function() {
        $('.checklist__text').toggleClass('checklist__checkbox--checked');
    });

    // delete all checked products
    $('.checklist__delete-all').click(function() {

        if( $('.checklist__checkbox--checked').length ) {

            $('.checklist__list .checklist__wrapper .checklist__checkbox--checked').remove();

        }

    });
});