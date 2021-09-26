// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:5,
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true
// });





$('.owl-carousel').owlCarousel({
    loop:true,
    item:5,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            // nav:true,
            loop:false
        }
    }
})
$(window).scroll(function(){
    $('nav').toggleClass('navstyle',$(this).scrollTop()>50);
})