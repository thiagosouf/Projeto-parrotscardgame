let nCartas, nomeMeme1, nomeMeme2,valorCarta1,valorCarta2, cards, jogadasCertas = 0, jogadasTotal = 0;
let jogada = 0;
let lista = []
let listaImg = []
let listaMemes = [["meme1","bobrossparrot.gif"],["meme1","bobrossparrot.gif"],["meme2","dog1.png"],["meme2","dog1.png"],["meme3","fiestaparrot.gif"],["meme3","fiestaparrot.gif"],["meme4","metalparrot.gif"],["meme4","metalparrot.gif"],["meme5","revertitparrot.gif"],["meme5","revertitparrot.gif"],["meme6","tripletsparrot.gif"],["meme6","tripletsparrot.gif"],["meme7","unicornparrot.gif"],["meme7","unicornparrot.gif"]]
const relogio = document.querySelector(".relogio");
let tempoJogo = null;
comecar()


function comecar(){
    nCartas = prompt("Quantas cartas voce deseja(numeros pares de 4 a 14)")
    tempoJogo = setInterval(reloginho,1000);
    if ((nCartas<4)||(nCartas>14)||(nCartas%2 !== 0)){
        comecar();
    } else{
        //se o valor for valido
        
        for (let i=0; i<=parseInt(nCartas)-1; i++){
            // faz a lista com identificador das divs
            lista.push(i);
            listaImg.push(".img"+i);
            lista.sort(sortear);
            }
        }
    printarDivs()
}

function escolher(valor){
    
    if (jogada == 0){
        //stilo de virar a carta 
        identificador1 = document.querySelector(".img"+valor)
        identificador1.classList.add("virar")  
        nomeMeme1 = document.querySelector(".img"+valor+">img:last-child").classList[1]
        valorCarta1 = valor
        //virar carta
        virarCarta(valor)
        // tirando a primeira carta da escolha
        identificador1.setAttribute("onclick","")

        jogada++
    }else if (jogada == 1) {
        //stilo de virar a carta 
        identificador2 = document.querySelector(".img"+valor)
        identificador2.classList.add("virar")
        nomeMeme2 = document.querySelector(".img"+valor+">img:last-child").classList[1]
        valorCarta2 = valor
        //virar carta
        virarCarta(valor)
        // tirando a segunda carta da escolha
        identificador2.setAttribute("onclick","")

        jogada++
        if (nomeMeme1 == nomeMeme2){
            //se as cartas forem iguais
            jogadasCertas = jogadasCertas + 2  
            //acrescenta borda verde para identificar que as cartas são iguais          
            identificador1.classList.add("borda")
            identificador2.classList.add("borda")
            if (jogadasCertas == nCartas){
                clearInterval(tempoJogo);
                //se Fim de Jogo 
                setTimeout(tempo, 1000);
                function tempo(){
                    alert("GAME OVER")
                    clearInterval(tempoJogo);
                    jogadasTotal = jogadasTotal + jogadasCertas
                    alert(`Você ganhou em ${jogadasTotal} jogadas e em ${relogio.innerHTML} segundos!`)
                    novoJogo = prompt("Deseja iniciar uma nova partida? (s/n)")
                    if (novoJogo == "s"){
                        reiniciarJogo()
                    }
                }
            }
            jogada=0
        } else {
            //Se as cartas forem diferentes
            jogadasTotal = jogadasTotal + 2
            setTimeout(tempo, 1000);
            function tempo() {
                // retomar funcao onclick e desvirar as cartas
                identificador1.classList.remove("virar")
                identificador2.classList.remove("virar")
                desvirarCarta()
                jogada=0
                //zera a variavel jogada
            }
        }
    }
    else{
        //se o usuario tentar clicar em uma terceira carta, a funcao retorna false
        return false
    }
}

function virarCarta(valor){
    setTimeout(tempo, 100);
            function tempo() {
                document.querySelector(".img"+valor+">img:first-child").classList.add("esconder");
                document.querySelector(".img"+valor+">img:last-child").classList.remove("esconder");
                }  
}

function desvirarCarta(){
    setTimeout(tempo, 100);
        function tempo() {
            identificador1.setAttribute("onclick","escolher("+valorCarta1+")")
            identificador2.setAttribute("onclick","escolher("+valorCarta2+")")

            document.querySelector(".img"+valorCarta1+">img:first-child").classList.remove("esconder");
            document.querySelector(".img"+valorCarta1+">img:last-child").classList.add("esconder");
            document.querySelector(".img"+valorCarta2+">img:first-child").classList.remove("esconder");
            document.querySelector(".img"+valorCarta2+">img:last-child").classList.add("esconder");
        }
}

function printarDivs(){
    cards=''
    for(let j=0;j<lista.length;j++){
        cards = document.querySelector(".areaJogo").innerHTML= cards + `<div class="carta img${lista[j]}" data-identifier="card" onclick="escolher(${lista[j]})">
        <img src="./img/front.png" alt="verso-carta" data-identifier="back-face" alt="verso-carta" class="verso face">
        <img src="./img/${listaMemes[lista[j]][1]}" data-identifier="front-face" alt="frente-carta" class="frente ${listaMemes[lista[j]][0]} face esconder">
        </div>`;
}
}
function sortear() { 
	return Math.random() - 0.5; 
}

function reiniciarJogo(){
    window.location.reload();
}

function reloginho() {
    relogio.innerHTML = parseInt(relogio.innerHTML) + 1;
}
