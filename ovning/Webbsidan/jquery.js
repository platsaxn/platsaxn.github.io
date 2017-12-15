$(function(){
    $("#openinfo").click(function() { 
        $("#info").toggle();
        $("#openinfo").toggle();
        $("#closeinfo").toggle();
    });
    $("#closeinfo").click(function() {
        $("#info").toggle();
        $("#openinfo").toggle();
        $("#closeinfo").toggle();
    });
    $("#sakert").click(function() {
        $("#sakert").css("border-bottom", "2px solid red")
        $("#sakert").css("color", "red")
    });
    $("#schysst").click(function() {
        $("#schysst").css("border-bottom","2px solid red")
        $("#schysst").css("color", "red")
    });
    $("#standard").click(function() {
        $("#standard").css("border-bottom","2px solid red")
        $("#standard").css("color", "red")
    });
});
