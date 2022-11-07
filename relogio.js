const hora = document.querySelector("#hora");
const minuto = document.querySelector("#minuto");
const segundo = document.querySelector("#segundo");

const hh = document.getElementById('hh');
const mm = document.getElementById('mm');
const ss = document.getElementById('ss');

const hr_ponto = document.querySelector(".hr_ponto");
const mm_ponto = document.querySelector(".mm_ponto");
const ss_ponto = document.querySelector(".ss_ponto");

const relogio = setInterval(function time(){
    let novahora = new Date();
    let horaAtual = novahora.getHours();
    let minutoAtual = novahora.getMinutes();
    let segundosAtual = novahora.getSeconds();
    
    if (horaAtual < 10) horaAtual = '0' +horaAtual;
    if (minutoAtual < 10) minutoAtual = '0' +minutoAtual;
    if (segundosAtual < 10) segundosAtual = '0' +segundosAtual;
    hora.textContent = horaAtual;
    minuto.textContent = minutoAtual;
    segundo.textContent = segundosAtual;

    hh.style.strokeDashoffset = 440 - (440 * horaAtual) /24;
    mm.style.strokeDashoffset = 440 - (440 * minutoAtual) /60;
    ss.style.strokeDashoffset = 440 - (440 * segundosAtual) /60;

    //360 /24 = 15
   hr_ponto.style.transform = `rotate(${horaAtual * 15}deg)`;

    //360 /60 = 6
    mm_ponto.style.transform = `rotate(${minutoAtual * 6}deg)`;

    //360 /60 = 6
    ss_ponto.style.transform = `rotate(${segundosAtual * 6}deg)`;

})
