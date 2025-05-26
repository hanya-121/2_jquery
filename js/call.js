$(function(){
    $("button#hideB").click(function(){
        $("p").hide("slow",function(){
            alert("사라졌당");
        })
    });
});

// 자바스크립트
function myDisplayer(some){
    document.getElementById("call").innerHTML = some;
}

function myFirst(){
    myDisplayer("chy");
}

function mySecond(){
    myDisplayer("jmh");
}
// 함수는 호출 할 때만 실행되는 코드블럭
myFirst();
mySecond();