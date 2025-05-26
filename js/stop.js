$(function(){
    $("#flip").click(function(){
        $("#panel").slideDown(5000); // 변수 아닌 것은 ("") 쌍따옴표
    });

    // 동작을 멈출 때 ↓
    $("#stop").click(function(){
        $("#panel").stop();
    });
})