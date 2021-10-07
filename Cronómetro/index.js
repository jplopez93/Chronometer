
let board = document.getElementById("board");
let play_button = document.getElementById("play_button");
let pause_button = document.getElementById("pause_button");
let reset_button = document.getElementById("reset_button");

let is_active = false;
let time = {
    tenths  : 0,
    seconds : 0,
    minutes : 0
}

function format(number){
    let result = number < 10 ? "0" + number : number
    return result;
}

function update(){
    time.tenths++;

    if(time.tenths == 10){
        time.tenths = 0;
        time.seconds++;
    }
    if(time.seconds == 60){
        time.seconds = 0;
        time.minutes++;
    }
    board.innerHTML = `${format(time.minutes)}:${format(time.seconds)}:${format(time.tenths)}`

    if(is_active){
        setTimeout(update,100);
    }
}

function play(){
    if(is_active == false){
        is_active = true;
        update();
    }
}

function pause(){
    is_active = false;
}

function reset(){
    time.tenths  = 0;
    time.seconds = 0;
    time.minutes = 0;

    board.innerHTML = `${format(time.minutes)}:${format(time.seconds)}:${format(time.tenths)}`
}

play_button.addEventListener('click',play);
pause_button.addEventListener('click',pause);
reset_button.addEventListener('click',reset);
