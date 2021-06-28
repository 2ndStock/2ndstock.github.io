$(function() {
    var scroll = new SmoothScroll('a[href*="#contact"]');
    var scroll = new SmoothScroll('a[href*="#mainNav"]');
})












//event saat link di klik
$('.page-scroll').on('click', function (e) {

//ambil href
var href = $(this).attr('href');
//tangkap elemen ybs
var elemenHref = $(href);

//pindahkan scrol
$('body').animate({
    scrollTop: elemenHref.offset().top              
});

e.preventDefault();
    
});