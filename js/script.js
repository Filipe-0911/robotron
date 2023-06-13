const controle = document.querySelectorAll(`[data-controle]`);

controle.forEach( (elemento) => {      //forEach interage com cada elemento do array obtido atraves do querySelectorAll
    elemento.addEventListener(`click`, (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode); 
        
    })
})

function manipulaDados(operacao, controle) {

    console.log(operacao);

    console.log(controle);

    const peca = controle.querySelector("[data-contador]");

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1 //parseInt transforma em number
    }
}