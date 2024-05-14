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
    b.id = `id${id}`;
    id++;
    
}
let aberto = ["",""];
function mostrar(b){
    //b.innerHTML = blocos[b.id];
    if(b.innerHTML != "") return;

    if(aberto[0] != "" && aberto[1] != "") testar();

    if(aberto[0] == ""){
        aberto[0] = b;
        b.innerHTML = blocos[b.id];
        return;
    }

    if(aberto[1] == ""){
        aberto[1] = b;
        b.innerHTML = blocos[b.id];
        return;
    }
   

function testar(){
    if(aberto[0].innerHTML != aberto[1].innerHTML){
        aberto[0].innerHTML = "";
        aberto[1].innerHTML = "";
    }
    aberto[0] = "";
    aberto[1] = "";
}

}


function sortear(){
    return Math.floor(Math.random() * lsEmoticons.length);
}