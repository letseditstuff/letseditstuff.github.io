$(document).ready(function(){
    $(".about").click(function(){
        $(".aboutcontent").slideToggle(500);
    });

    $(".punctuation").click(function(){
        $(".punctuationcontent").slideToggle(500);
    });

    $(".capital").click(function(){
        $(".capitalcontent").slideToggle(500);
    });

    $(".spelling").click(function(){
        $(".spellingcontent").slideToggle(500);
    });
    
    $(".formatting").click(function(){
        $(".formattingcontent").slideToggle(500);
    });
    
    $(".misc").click(function(){
        $(".misccontent").slideToggle(500);
    });
});