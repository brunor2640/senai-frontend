//Lista os intens que estâo no jogo da memória
let lsEmoticons = ["😊","😜","🤣","😍","😒","😘","😁","😎"];

// Replicar os itens na tabela
const tamanho = lsEmoticons.length;
for (let i = 0; i < tamanho; i++){
     lsEmoticons.push(lsEmoticons[i])
}

// para cada bloco incluir o evento de click
let blocos = {};
let lsBloco = document.getElementsByClassName("bloco");
let id = 0;
for (const b of lsBloco) {
    b.addEventListener("click", ()=>{
        mostrar(b);
    });
    icon = lsEmoticons.splice(sortear(),1); 
    blocos[`id${id}`] = icon;
    id++;
    
}

function mostrar(b){
    b.innerHTML = "😎";
}

function sortear(){
    return Math.floor(Math.random() * lsEmoticons.length);
}