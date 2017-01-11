$(document).ready(function() {

  $('.row').on('click', function(){

    var currentNavHt = $('nav').height();
      if(currentNavHt < 5){
        var newNavHt = $('nav > ul').height() + 15;
        $('nav').animate({'height': newNavHt + 'px'}, 750);
      }else{
        $('nav').animate({'height':'0px'}, 750);
      }

  });

  // Button Switch
  $(".button1").mouseover(function(){
    $(this).children(".hover1").fadeIn().show();
  });

  $(".button1").mouseleave(function(){
    $(this).children(".hover1").fadeOut();
  });

  $(".button2").mouseover(function(){
    $(this).children(".hover2").fadeIn().show();
  });

  $(".button2").mouseleave(function(){
    $(this).children(".hover2").fadeOut();
  });

});
