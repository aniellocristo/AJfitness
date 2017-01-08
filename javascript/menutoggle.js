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

});
