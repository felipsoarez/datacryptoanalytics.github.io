dayName = new Array ("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado")
monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
now = new Date
var clock = document.getElementById('real-clock');
setInterval(function () {
    clock.innerHTML = ((new Date).toLocaleString().substr(11, 8));  
}, 1000);
