$('.recruitment__info--slide').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              autoplay:true,
              autoplaySpeed: 2000,
            }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay:true,
            autoplaySpeed: 2000,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed: 2000,
          }
        }
    ]
});