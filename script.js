let nCartas, pCarta, sCarta, b1, b2;
let x = 0;
comecar()


function comecar(){
    nCartas = prompt("Quantas cartas voce deseja(numeros pares de 4 a 14)")
if ((nCartas<4)||(nCartas>14)||(nCartas%2 !== 0)){
    comecar();
} else{

    for (let i=1; i<=nCartas; i++){
        imagem = (".img"+i);
        document.querySelector(imagem).classList.remove("esconder");
        document.querySelector(imagem+" > .verso").classList.remove("esconder");
    }
}
}

function escolher(valor){
    document.querySelector(".img"+valor+">img:first-child").classList.add("esconder");
    document.querySelector(".img"+valor+">img:last-child").classList.remove("esconder");
    console.log("jogada ="+x)
    if (x == 0){
        pCarta = document.querySelector(".img"+valor+">img:last-child").classList[1]
        b1 = ("img"+valor)
        document.querySelector("."+b1).classList.add("borda")
        console.log("pCarta = "+pCarta)
        x++
    }else {
        sCarta = document.querySelector(".img"+valor+">img:last-child").classList[1]
        b2 = ("img"+valor)
        document.querySelector("."+b2).classList.add("borda")
        console.log("sCarta = "+sCarta)
        console.log("pcarta = "+pCarta+" sCarta = "+sCarta)
        if (pCarta == sCarta){
            console.log("AS CARTAS SAO IGUAIS")
            document.querySelector("."+b1).classList.remove(b1)
            document.querySelector("."+b2).classList.remove(b2)
            x=0
        } else {
            console.log("AS CARTAS SAO DIFERENTES")
            
            const myTimeout = setTimeout(tempo, 1000);
            function tempo() {
                document.querySelector("."+b1).classList.remove("borda")
                document.querySelector("."+b2).classList.remove("borda")
                document.querySelector("."+b1+">img:first-child").classList.remove("esconder");
                document.querySelector("."+b1+">img:last-child").classList.add("esconder");
                document.querySelector("."+b2+">img:first-child").classList.remove("esconder");
                document.querySelector("."+b2+">img:last-child").classList.add("esconder");
                x=0
                }
            
        }
    }
}