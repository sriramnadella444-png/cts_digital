$(document).ready(function(){

    $(".registerBtn").click(function(){

        $(this).fadeOut(500).fadeIn(500);

    });

    $(".galleryImage").mouseenter(function(){

        $(this).css("border","5px solid red");

    });

    $(".galleryImage").mouseleave(function(){

        $(this).css("border","none");

    });

});