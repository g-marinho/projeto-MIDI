

function tocaSom(idElementoAudio) {
   const elemento =  document.querySelector(idElementoAudio);

   if (elemento.localName === 'audio' && elemento != null) {
    elemento.play();
   } else {
    alert("Só é possível executar elementos com a Tag audio");
   }
   
}

const listaDeTeclas = document.querySelectorAll('.tecla'); //Acessa a primeira classe do elemento button
let i = 0;

for (i = 0; i <= listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1]; //Acessando a segunda classe do elemento button
    const idAudio = `#som_${instrumento}`; //template string que usa a parte inicial da classe elemento audio e concatena com a segunda classe do elemento button

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
