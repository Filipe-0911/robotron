const robotron =  document.querySelector("#robotron");
let nome = prompt("Diga seu nome");

robotron.addEventListener("click", (evento) => {
    console.log(nome + ", você clicou no robô");
    console.log(evento);
    
}) 

function dizOi () {

    console.log('Olá, ' + nome + '. Seja bem vindo ao Robotron 2000');
    alert("Clique no robô e obtenha mais informações no console.")
}

dizOi ()