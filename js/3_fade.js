$(function(){ // 문서가 열리기 전 실행 방지
    /* $('button').click(function(){ // 버튼을 누를 때의 기능은?
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    }) */

        $('button').click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    })
})