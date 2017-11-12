function isEmailValid(emailAdress) {
    var EMAIL_REGEXP = new RegExp('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$', 'i');
    return EMAIL_REGEXP.test(emailAdress);
}

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

window.alert = function(_content, _title, smile, showTitle, afterCloseRedirect) {
    var _title = _title || 'Ошибка!';
    var smile = smile || false;
    var showTitle = showTitle || false;
    var _content = _content || 'Что-то пошло не так';
    var d = $.Deferred();
    $.fancybox({
        content: ' \
        <div class="f-popup f-popup__recovery '+(showTitle === true?'':'__whide')+' " id="success-popup"> \
            '+(showTitle === true?'<div class="f-popup-title">'+_title+'</div>':'')+' \
            <div class="f-popup__recovery"> \
                <div class="f-popup__recovery-text"> \
                    <p>'+_content+'</p> \
                </div> \
                '+(smile === true?'<div class="smile"><span>:</span>)</div>':"")+' \
            </div> \
        </div> \
        ',
        afterClose: function(){
            d.resolve();
            if(afterCloseRedirect)
                window.top.location.href = afterCloseRedirect;
        }
    });

    return d.promise();
};

$('.select_file').click(function(){
    $('.contacts__inner__form input[type = "file"]').click();
});

function fnOpenFile (file){
    var filename = file.files[0].name;
    $('.select_file').text(filename);
}

jQuery(function(){
    jQuery(".phone").mask("+7(999) 999-9999");
});

$('.contacts__inner__form input[type = "submit"]').click(function(){
    var name = $('.contacts__inner__form input[name = "name"]').val();
    var email = $('.contacts__inner__form input[name = "email"]').val();
    var mess = $('.contacts__inner__form textarea').val();
    var flag = 0;

    $('.contacts__inner__form input').removeClass('error_field');
    $('.contacts__inner__form textarea').removeClass('error_field');

    if(name == ''){
        $('.contacts__inner__form input[name = "name"]').addClass('error_field');
        flag = 1;
    }

    if(email == ''){
        $('.contacts__inner__form input[name = "email"]').addClass('error_field');
        flag = 1;
    }

    if(email != '' && !isEmailValid(email)){
        $('.contacts__inner__form input[name = "email"]').addClass('error_field');
        flag = 1;
    }

    if(mess == ''){
        $('.contacts__inner__form textarea').addClass('error_field');
        flag = 1;
    }

    if(flag == 0){
        alert('Ваша заявка успешно отправлена. В ближайшее время мы с вами свяжемся.', 'Спасибо за заявку!', false, true);
        return true;
    }else {
        return false;
    }
});

var wow = new WOW();
wow.init();