$(document).ready(function(){

  $(window).scroll(function(){
    let scrollDistance = $(document).scrollTop();

    if(scrollDistance>60){
      $('#main-nav').addClass('sticky');
    }else{
      $('#main-nav').removeClass('sticky');
    }

  });

});
