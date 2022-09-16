$(function() {
    /* GoTop START */
    $('#BackTop').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 333);
    });
    /* GoTop END */

    /* Modal 顯示 隱藏GoTop START */
    $(window).on("scroll.myScroll", function() {
        if ($(this).scrollTop() > 300) {
            $('#BackTop').fadeIn(222);
        } else {
            $('#BackTop').stop().fadeOut(222);
        }
    });
    $('.modal').on('show.bs.modal', function(e) {
        $('#BackTop').stop().fadeOut(222);
    });
    $('.modal').on('hidden.bs.modal', function(e) {
        $('#BackTop').fadeIn(222);
    });
    /* Modal 顯示 隱藏GoTop END */
});