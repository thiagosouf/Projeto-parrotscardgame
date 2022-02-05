let nCartas, pCarta, sCarta,n1,n2, b1, b2, cards, jogadasCertas = 0, jogadasTotal = 0;
let x = 0;
let lista = []
let listaImg = []
let listaMemes = [["meme1","bobrossparrot.gif"],["meme1","bobrossparrot.gif"],["meme2","dog1.png"],["meme2","dog1.png"],["meme3","fiestaparrot.gif"],["meme3","fiestaparrot.gif"],["meme4","metalparrot.gif"],["meme4","metalparrot.gif"],["meme5","revertitparrot.gif"],["meme5","revertitparrot.gif"],["meme6","tripletsparrot.gif"],["meme6","tripletsparrot.gif"],["meme7","unicornparrot.gif"],["meme7","unicornparrot.gif"]]

comecar()


function comecar(){
    nCartas = prompt("Quantas cartas voce deseja(numeros pares de 4 a 14)")
    // se o valor for invalido
if ((nCartas<4)||(nCartas>14)||(nCartas%2 !== 0)){
    comecar();
} else{
    //se o valor for valido
    for (let i=0; i<=parseInt(nCartas)-1; i++){
        // faz a lista com identificador das divs
        lista.push(i);
        listaImg.push(".img"+i);
        console.log(i);
        lista.sort(comparador);

        }
    }
    printarDivs()
}

function escolher(valor){
    
    if (x == 0){
        virarCarta(valor)
        // nome do meme (meme1) / numero da div (img1) / numero do parametro (1)
        pCarta = document.querySelector(".img"+valor+">img:last-child").classList[1]
        b1 = ("img"+valor)
        n1 = valor
        // tirando o pCarta da escolha
        document.querySelector(".img"+valor).setAttribute("onclick","")

        console.log("pCarta = "+pCarta)
        x++
        console.log("jogada ="+x)
    }else if (x == 1) {
        virarCarta(valor)
        // nome do meme (meme1) / numero da div (img1) / numero do parametro (1)
        sCarta = document.querySelector(".img"+valor+">img:last-child").classList[1]
        b2 = ("img"+valor)
        n2 = valor

        // tirando o sCarta da escolha
        document.querySelector(".img"+valor).setAttribute("onclick","")

        x++
        console.log("jogada ="+x)
        console.log("sCarta = "+sCarta)
        console.log("pcarta = "+pCarta+" sCarta = "+sCarta)

        if (pCarta == sCarta){
            console.log("AS CARTAS SAO IGUAIS")
            jogadasCertas = jogadasCertas + 2
            console.log("JOGADAS CERTAS"+jogadasCertas)
            
            document.querySelector("."+b1).classList.add("borda")
            document.querySelector("."+b2).classList.add("borda")
            document.querySelector("."+b1).setAttribute("onclick","")
            document.querySelector("."+b2).setAttribute("onclick","")

            if (jogadasCertas == nCartas){
                setTimeout(tempo, 1000);
                function tempo(){
                alert("GAME OVER")
                jogadasTotal = jogadasTotal + jogadasCertas
                alert(`Você ganhou em ${jogadasTotal} jogadas!`)
                novoJogo = prompt("Deseja iniciar uma nova partida? (s/n)")
                if (novoJogo == "s"){
                    reiniciarJogo()
                }
            }
            }
            x=0
        } else {
            console.log("AS CARTAS SAO DIFERENTES")
            jogadasTotal = jogadasTotal + 2
            
            setTimeout(tempo, 1000);
            function tempo() {
                // retomar funcao onclick
                document.querySelector("."+b1).setAttribute("onclick","escolher("+n1+")")
                document.querySelector("."+b2).setAttribute("onclick","escolher("+n2+")")

                document.querySelector("."+b1+">img:first-child").classList.remove("esconder");
                document.querySelector("."+b1+">img:last-child").classList.add("esconder");
                document.querySelector("."+b2+">img:first-child").classList.remove("esconder");
                document.querySelector("."+b2+">img:last-child").classList.add("esconder");
                x=0
                console.log("ZERANDO AS JOGADAS...")
                }
            
        }
    }
    else{
        return false
    }
}

function virarCarta(valor){
    document.querySelector(".img"+valor+">img:first-child").classList.add("esconder");
    document.querySelector(".img"+valor+">img:last-child").classList.remove("esconder");
    console.log("jogada ="+x)
}

function printarDivs(){
    cards=''
    for(let j=0;j<lista.length;j++){
        console.log(lista[j])
        cards = document.querySelector(".areaJogo").innerHTML= cards + `<div class="carta img${lista[j]}" onclick="escolher(${lista[j]})">
        <img src="./img/front.png" alt="verso-carta" class="verso">
        <img src="./img/${listaMemes[lista[j]][1]}" alt="frente-carta" class="frente ${listaMemes[lista[j]][0]} esconder">
        </div>`;
        console.log(listaMemes[lista[j]][0])
}
}
function comparador() { 
	return Math.random() - 0.5; 
}

function reiniciarJogo(){
    window.location.reload();
}
