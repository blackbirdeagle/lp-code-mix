function closePopup(){
    $('.service-detail').animate({
        right: '-100%',
    }, 500, function(){
        $('body').css({'overflow': 'auto'});
        $('.service-detail').empty();
    });
}

$(document).ready(function() {
    $('.prof-sites__service, .seo__service, .design__service, .other__service').click(function(){
        var type = $(this).attr('typesite');
        $('.service-detail').load('popups/' + type + '.html');
        $('.service-detail').animate({
            right: '0',
        }, 500, function(){
            $('body').css({'overflow-y': 'hidden'});
        });
    });

    function keyExit(e){
        if(e.keyCode == 27){
            $('.service-detail').animate({
                    right: '-100%',
                }, 500, function(){
                $('body').css({'overflow': 'auto'});
                $('.service-detail').empty();
            });
        }
    }

    addEventListener("keydown", keyExit);
});
