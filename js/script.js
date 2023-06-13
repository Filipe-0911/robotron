const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
console.log(estatisticas)

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {      //forEach interage com cada elemento do array obtido atraves do querySelectorAll
    elemento.addEventListener(`click`, (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode); 
        
        if (elemento.textContent == "+") {
            atualizaEstatisticas(evento.target.dataset.peca);
        } else {
            atualizaEstatisticas2(evento.target.dataset.peca);
        }
        
    })
})

function manipulaDados(operacao, controle) {

    //console.log(operacao);

    //console.log(controle);

    const peca = controle.querySelector("[data-contador]");
    //console.log(peca.value)

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1 //parseInt transforma em number
       
    }
}

function atualizaEstatisticas (peca) {
    
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]
    })
}

function atualizaEstatisticas2 (peca) {
    
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) - pecas[peca] [elemento.dataset.estatistica]
    })
}

function trocaImagem(cor){
    document.querySelector(".robo").src="img/Robotron 2000 - " + cor + ".png";

    // conhecimento novo, ao inserir .src vc consegue alterar o src da classe inserida ".robo"
 }