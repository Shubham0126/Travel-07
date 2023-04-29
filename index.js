$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn();
        $('.navbar').addClass('bg-dark')
    } else {
        $('#back-to-top').fadeOut();
        $('.navbar').removeClass('bg-dark')
    }
  });
  
  //Click event scroll to top button jquery
  
  $('#back-to-top').click(function(){
  
    $('html, body').animate({scrollTop : 0},600);
    return false;
  });

  $(".place-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
  });