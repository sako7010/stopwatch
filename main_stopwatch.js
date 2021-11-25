//  ↓変数を定義する　　　　　　　　　　　　　 ↓htmlの要素 
let display = document.getElementById("display");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;

let anotherHours= 0;
let anotherMinutes = 0;
let anotherSeconds = 0;



// 関数を定義する

function timer(){
    seconds++;
    if(seconds / 60 ==1){
        seconds = 0;
        minutes++;
        if(minutes / 60 == 1){
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10){
        anotherSeconds = "0" + seconds;
    }else{
        anotherSeconds = seconds;
    }
    if(minutes < 10){
        anotherMinutes = "0" + minutes;
    }else{
        anotherMinutes = minutes;
    }
    if(hours < 10){
        anotherHours = "0" + hours;
    }else{
        anotherHours = hours;
    }
    
    display.innerHTML = anotherHours + ":" + anotherMinutes + ":" + anotherSeconds;

}

$('#start').click(function(){
    count = setInterval(timer,1000);
    $(this).prop("disabled", true);
    $("#reset,#stop").prop("disabled",false)
});

$('#stop').click(function(){
    clearInterval(count);
    $(this).prop("disabled",true);
    $("#start,#reset").prop("disabled",false)
});

$('#reset').click(function(){
    clearInterval(count);
    hours = 0;
    minutes = 0;
    seconds = 0;

    display.innerHTML = "00:00:00"

    $("#reset,#stop").prop("disabled",true);
    $("#start").prop("disabled",false)

});
    








