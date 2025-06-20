$(document).ready(function () {
    $('.trending_games .autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
})
$(function () {
    var gallery = $('.gallery a').simpleLightbox({ navText: ['&lsaquo;', '&rsaquo;'] });
});