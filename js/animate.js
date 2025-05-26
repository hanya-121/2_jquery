/* $(function(){}) 비동기로 실행, 간략 ver */
$(document).ready(function(){ // 문서가 실행되기 전에 로드 되는 것을 방지
    $("button.rectt").click(function(){
    $("div.rect").animate({
        left:'+=250px', // 버튼을 클릭 할 때마다 증가 -= 사용 시 감소
        opatity:'+=0.5',
        height:'+=150px',
        width:'+=150px',
    }); //rect라는 클래스를 가진 div에 왼쪽으로 250px씩 이동
    })

    $("button.sh").click(function(){
        $("div.sh").animate({
            height:'toggle',
        })
    })

    $("button.timeB").click(function(){
        // 비동기로 실행 될 박스에 대해 변수설정
        var d = $("div.time"); // 변수 d는 time이라는 클래스를 가진 div
        // ↓ 아래부터 큐
        d.animate({height: '300px', opacity: '0.25'}, "slow");
        d.animate({width: '300px', opacity: '0.5'}, "slow");
        d.animate({height: '100px', opacity: '0.75'}, "slow");
        d.animate({width: '100px', opacity: '1'}, "slow");
        d.animate({borderRadius: '50%', opacity: '1'}, "fast");
    })

    $("button.typoB").click(function(){
        let sec = $("section.typo");
        sec.animate({left:'100px', width:'+=100px'}, "fast");
        sec.animate({fontSize:'3rem'}, "slow");
    })
});