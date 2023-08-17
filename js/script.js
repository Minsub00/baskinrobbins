$(document).ready(function(){
    var swiper = new Swiper(".banner-slide", {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay:{
          delay:2000,
          disableOnInteraction:false,
      }
      });
      $('.btn-wrap div').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        const result = $(this).attr('data-alt');
        $('.con-box').removeClass('active');
        $(`#${result}`).addClass('active');
      });
      $('.m-icon').click(function(){
        $('.m-menu').toggleClass('active');
      })
});