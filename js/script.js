function closePopup(){
    $('.close_popup').css({'display':'none'});
    $('.service-detail').animate({
        right: '-100%',
    }, 500, function(){
        $('body').css({'overflow': 'auto'});
        $('.service-detail').empty();
    });
}

$(function(){
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});


$('.prof-sites__service, .seo__service, .design__service, .other__service').click(function(){
    var type = $(this).attr('typesite');
    $('.service-detail').load('popups/' + type + '.html');
    $('.service-detail').animate({
        right: '0',
    }, 500, function(){
        $('body').css({'overflow-y': 'hidden'});
        $('.close_popup').css({'display':'block'});
    });
});

function keyExit(e){
    if(e.keyCode == 27){
        $('.close_popup').css({'display':'none'});
        $('.service-detail').animate({
            right: '-100%',
        }, 500, function(){
            $('body').css({'overflow': 'auto'});
            $('.service-detail').empty();
        });
    }
}

addEventListener("keydown", keyExit);


