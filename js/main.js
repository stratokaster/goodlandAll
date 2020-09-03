"use strict";
$(document).ready(function () {
    var scrollTop = $(window).scrollTop();
    fixedHeader(scrollTop);

})

$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    fixedHeader(scrollTop);
})

function fixedHeader(scrollTop) {
    if (scrollTop > 200){
        $('header').addClass('fixed');
        return;
    }else{
        $('header').removeClass('fixed');
        return;
    }
}