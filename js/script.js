function closePopup(){
    $('.close_popup').css({'display':'none'});
    $('.service-detail').animate({
        right: '-100%',
    }, 500, function(){
        $('body').css({'overflow': 'auto'});
        $('.service-detail').empty();
    });
}

function centerMenu(){
    var left = $('body').width() / 2 - $('.header__menu').width() / 2;
    var top = document.documentElement.clientHeight / 2 - $('.header__menu').height() / 2;
    $('.header__menu').css('left', left).css('top', top);
}

$(function(){
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});


$('.prof-sites__service, .seo__service, .design__service, .other__service, .policy_link').click(function(){
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

$(window).resize(function () {
    centerMenu();
});

window.addEventListener("orientationchange", function() {
    centerMenu();
}, false);

var flag = 0;

$('.mobile__menu__btn').click(function(){
    if(flag == 0) {
        $('.header__menu').fadeIn(300);
        centerMenu();
        flag = 1;
    }else{
        $('.header__menu').fadeOut(300);
        flag = 0;
    }
});
