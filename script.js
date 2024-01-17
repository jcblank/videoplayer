let video = document.getElementById("video1");
let controle = document.getElementsByClassName("controle")[0]
let container = document.getElementsByClassName("container")[0]



function onOver() {

    controle.style.visibility = "visible";
}

function onLeave() {
    controle.style.visibility = "hidden";
}

function retroceder() {
    video.currentTime -= 15;
}

function avancar() {
    video.currentTime += 15;
}

function diminuir_vel() {
    video.playbackRate -= 0.1;
    console.log("clicou")
}

function aumentar_vel() {
    video.playbackRate += 0.3;
    console.log("clicou")
}

function play() {
 video.play();
}

function stop() {
    video.pause();
    video.currentTime = 0;
    
}