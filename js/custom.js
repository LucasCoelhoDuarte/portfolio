jQuery(($) => {
    iniciaAcoesScroll();
    iniciaMenuHeader();
    iniciaCarrosselProjetos();
});

function iniciaAcoesScroll(){
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
        if (!$('html, body').is(":animated")) {
            $('html, body').animate({ scrollTop: 0 }, 600, 'linear');
        }
    });
}

function iniciaMenuHeader(){
    $('#header-principal #menu-header .button').click(() => {
        if($('#header-principal').hasClass('open-menu')){
            $('#header-principal').removeClass('open-menu');
        } else {
            $('#header-principal').addClass('open-menu');
        }
    });

    $('#header-principal .menu-item label').click((event) => {
        ativaMenu($(event.target).parent());

        secaoDestino = "#" + $(event.target).parent().attr("data-id")
        
        $("html, body").stop().animate({
            scrollTop: $(secaoDestino).offset().top - 150
        }, 600, 'linear');
    });

    $(window).on("scroll", function(event) {

        let window = $(this);

        if(!$("html, body").is(':animated')){
            $.each($('#header-principal .menu-item'), function(index, menu) {
                dataIdMenu = $(menu).attr("data-id");

                if(window.scrollTop() > ($('#' + dataIdMenu).offset().top - 150)
                    && window.scrollTop() < ($('#' + dataIdMenu).offset().top - 150 + $("#" + dataIdMenu).height())){
                    ativaMenu($("#header-principal .menu-item[data-id='" + dataIdMenu + "']"));
                }
            });
        }
    });
}

function ativaMenu(menu){
    if (!$(menu).hasClass('ativo')) {
        $('#header-principal .menu-item').removeClass('ativo');
        menu.addClass('ativo');
        
        larguraAreaMenu = $("#header-principal .area-menu").width();
        posicaoMenuAtivoPX = $("#header-principal .menu-item.ativo").offset().left - $("#header-principal .area-menu").offset().left;

        posicaoMenuAtivoPorcentagem = (100 / larguraAreaMenu) * posicaoMenuAtivoPX + "%";
        
        $("#header-principal .indicador-selecao").css("left", posicaoMenuAtivoPorcentagem);
    }
}

function iniciaCarrosselProjetos() {
    $('#secao-projetos .grid .area-projetos .carrossel-projetos').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('#secao-projetos .grid .area-projetos .button-anterior'),
        nextArrow: $('#secao-projetos .grid .area-projetos .button-proximo')
    });
}