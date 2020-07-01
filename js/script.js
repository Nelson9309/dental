$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});    

$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:false,
        slidesToShow:1,
        autoplay:true,
        speed:1000,
        autoplaySpeed:2000,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});

