// $("#test").on("click", function(){
//   $(this).toggleClass("clicked");
// });

$( document ).ready(function(){

  $(".program").on("click", function(){
    if($(".program").hasClass("clicked")){
      $(".program").removeClass("clicked");
    }else{
        $(this).toggleClass("clicked");
    }

  });


})
