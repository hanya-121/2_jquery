$(function(){ // 문서가 로드 되기 전에 실행되는 것을 방지
    $('#hide').click(function(){
        $("p.one").hide(1000); // 웹에서 1초 = 1000
    });
    $('#show').click(function(){
        $("p.one").show(2000);
    })

    //토글 버튼
    $("button.control").click(function(){
        $("mark").toggle();
    })
})