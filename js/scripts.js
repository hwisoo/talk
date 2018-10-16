$(document).ready(function() {

    var dogSoundElement = document.getElementById("dogsound");
    var catSoundElement = document.getElementById("catsound");

    $("button#Cat").click(function() {
      $("ul#cat-sound").prepend("<li>Meow!</li>");
      $("ul#cat-sound").children("li").first().click(function() {
        $(this).remove();
      });

    catSoundElement.play();
            
   
    });

    $("button#Dog").click(function() {
        $("ul#dog-sound").prepend("<li>Woof!</li>");
        $("ul#dog-sound").children("li").first().click(function() {
            $(this).remove();
        });
        dogSoundElement.play();
    });

    $("#showCat").click(function(){
        $("#catImg").toggleClass("show");
    })

    $("#showDog").click(function(){
        $("#dogImg").toggleClass("show");
    })
    
    
});

