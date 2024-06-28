
async function light() {
    VANTA.NET({
        el: ".back",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x6058f0,
        backgroundColor: 0xdadaff,
        spacing: 20.00
    })
}
async function dark() {
    VANTA.NET({
        el: ".dark",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xfc2b6c,
        backgroundColor: 0x0,
        spacing: 20.00
    })
}
light();
$(document).ready(function () {

    // swiper
    var swiper = new Swiper(".swiper", {
        effect: "cube",
        grabCursor: true,
        pauseOnMouseEnter: true,
        loop: true,
        speed: 1000,
        cubeEffect: {
            shadow: false,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
    });

    // Custom text for each pagination bullet
    var bulletTexts = ["About", "Resume", "Portfolio", "Contact"];

    // Ensure bullets are updated on initial load
    swiper.on('paginationUpdate', function () {
        $('.swiper-pagination-bullet').each(function (index) {
            if (index < bulletTexts.length) {
                $(this).text(bulletTexts[index]);
            }
        });
    });

    // Trigger the pagination update manually to apply custom texts on load
    swiper.emit('paginationUpdate');




    // $('.swiper-pagination-bullet').on('click', function () {
    //     var bulletIndex = $(this).index();
    //     console.log(bulletIndex)
    //     swiper.slideTo(bulletIndex, 0); // Assuming each bullet corresponds to a slide index
    //     console.log(swiper.slideTo(1))
    // });
    // $('.swiper-pagination-bullet').on('click', function () {
    //     var bulletIndex = $(event.target).index();
    //     var currentIndex = swiper.activeIndex;
    //     var slidesCount = swiper.slides.length;
    
    //     if (bulletIndex > currentIndex) {
    //         var slidesToSkip = bulletIndex - currentIndex;
    //         swiper.slideToLoop(currentIndex + slidesToSkip);
    //     } else if (bulletIndex < currentIndex) {
    //         var slidesToSkip = currentIndex - bulletIndex;
    //         swiper.slideToLoop(currentIndex - slidesToSkip);
    //     }
    // });





    // day night
    $('.toggler').click(function () {
        $('.back').toggleClass('dark');
        if ($('.back').hasClass('dark')) {
            dark();
        } else {
            light();
        }
    })

});


