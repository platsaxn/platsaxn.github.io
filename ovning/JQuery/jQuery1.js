$(function(){
    $("body").click(function() {
        var x = Math.floor(Math.random()*800);
        var y = Math.floor(Math.random()*500);
        $("#fly1").css({left:x,top:y});
    });
    $("#openinfo").click(function() { 
        $("#info").toggle();
    });
    $("#bgcolor").change(function(){
        $("body").css("background-color", $(this).val());
    });
    $("#fcolor").change(function(){
        $("body").css("color",$(this).val());
    });
    $("#rubrik").focusout(function(){
        $("h1").text($(this).val());
    });
});
