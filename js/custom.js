jQuery(($) => {
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 100) {
            $('#header-principal').addClass('scroll');

            $("#button-return-top").show();
            $('#button-return-top').removeClass('animate__bounceOutDown');
            $('#button-return-top').addClass('animate__bounceInUp');
        }  
        else if ($(this).scrollTop() === 0){
            $('#header-principal').removeClass('scroll');

            if($('#button-return-top').css('opacity') === '1'){
                $('#button-return-top').removeClass('animate__bounceInUp');
                $('#button-return-top').addClass('animate__bounceOutDown');
            } else {
                $("#button-return-top").hide();
            }
        }
    });

    $('#button-return-top').click(() => {
        $('html, body').animate({ scrollTop: 0 }, 150);
    });
});