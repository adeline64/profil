$(document).ready(function(){

    $('#flipin').hide();
    $('.source').hide();
    $('.source-boxy').click(function(){
         $('.source').slideToggle();
 
 
    })
   $('span').mouseenter(function(){
     $('span').addClass('bright');
     $('span').mouseleave(function(){
       $('span').removeClass('bright')
     })
  })
 
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop()
    if (wScroll >1700){
      $('#flipin').show();
      $('#flipin').addClass('animated bounceInUp');
    }
 
 
  });
 
 
 })