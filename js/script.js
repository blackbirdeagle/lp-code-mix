$(document).ready(function() {
    $('.prof-sites__service, .seo__service, .design__service, .other__service').click(function(){
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
            });
        }
    }

    addEventListener("keydown", keyExit);
});