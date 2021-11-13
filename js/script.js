/* //Cria a Hora no Display
function mostraHora() {
    let capturaHora = new Date();
    hora = capturaHora.getHours();
    min = capturaHora.getMinutes();
    seg = capturaHora.getSeconds();

    if (hora < 10) {
        hora = "0" + hora;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (seg < 10) {
        seg = "0" + seg;
    }
    let horaAtual = document.getElementById("horaAtual");
    horaAtual.innerHTML = `${hora} : ${min} : ${seg}`;
}
setInterval(mostraHora, 1000);

*/

//Cópia por que eu sou um incapaz

let min1;
let seg1;
//let display;
let displayMinutes;
let displaySeconds;
let cron;
let btnPlay;
let btnReset;
let minutesInterval;
let secondsInterval;
let fimContador = new Audio('../assets/notifStop.wav')


function geraDados() {
    btnPlay = document.getElementById("play");
    btnReset = document.getElementById("reset");
    btnPlay.addEventListener("click", startContador);
    btnReset.addEventListener("click", resetContador);
    min1 = 25;
    seg1 = '0' + 0;

    displayMinutes = document.getElementById('minutos');
    displaySeconds = document.getElementById('segundos');
    displayMinutes.innerHTML = min1;
    displaySeconds.innerHTML = seg1;

    //display = document.getElementById('display');
    //display.innerHTML = `${min1} : ${seg1}`

}
geraDados();

function startContador() {

    min1 = 24;
    seg1 = 59;
    displayMinutes.innerHTML = min1;
    displaySeconds.innerHTML = seg1;
    btnPlay.style.pointerEvents = 'none';

    //inica a contagem dos minutos e segundos
    var minutesInterval = setInterval(timerContadorMinutes, 60000);
    var secondsInterval = setInterval(timerContadorSeconds, 1000);

    //Função responsável por deduzir os minutos
    function timerContadorMinutes() {
        min1--;
        displayMinutes.innerHTML = min1;
    }

    //Função reponsável por deduzir os segundos
    function timerContadorSeconds() {
        seg1--;
        displaySeconds.innerHTML = seg1;

        if (seg1 <= 0) {
            if (min1 <= 0) {
                clearInterval(minutesInterval);
                clearInterval(secondsInterval);
                displayMinutes.innerHTML = '0' + min1;
                displaySeconds.innerHTML = '0' + seg1;
                fimContador.play();
                btnPlay.style.pointerEvents = 'auto';
            }
            seg1 = 60;
        }
    }
}

function resetContador() {
    clearInterval(minutesInterval);
    clearInterval(secondsInterval);
    min1 = 0;
    seg1 = 0;
    displayMinutes.innerHTML = '0' + min1;
    displaySeconds.innerHTML = '0' + seg1;
}