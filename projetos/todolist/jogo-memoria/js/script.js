//Lista os intens que estâo no jogo da memória
let lsEmoticons = ["😊","😜","🤣","😍","😒","😘","😁","😎"];

// Replicar os itens na tabela
const tamanho = lsEmoticons.length;
for (let i = 0; i < tamanho; i++){
     lsEmoticons.push(lsEmoticons[i])
}

// para cada bloco incluir o evento de click
let lsBloco = document.getElementsByClassName("bloco");
for (const b of lsBloco) {
    b.addEventListener("click", ()=>{
        mostrar(b);
    });
    
}

function mostrar(b){
    b.innerHTML = "😎";
}