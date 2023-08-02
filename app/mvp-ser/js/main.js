$(function () {

  $('.category-top__item').on('click', function(e){
    e.preventDefault();
    $('.category-top__item').removeClass('category-top__item--active');
    $(this).addClass('category-top__item--active');
    
    $('.category-content__item').removeClass('category-content__item--active');
    $($(this).attr('href')).addClass('category-content__item--active');
  });

  $('.header-inner__btn-profile').on('click', function () {
    $('.header-inner__btn-profileMenu').toggleClass('header-inner__btn-profileMenu--active');
  });

    $('.top-slider__inner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '210px',
      arrows: false,
      responsive: [
        {
          breakpoint: 1800,
          settings: {
            centerPadding: '155px',
          }
        },
        {
          breakpoint: 1600,
          settings: {
            centerPadding: '110px',
          }
        },
      ]
    });
    $('.slick-prev').text(">");
    $('.slick-next').text("<");
    
});