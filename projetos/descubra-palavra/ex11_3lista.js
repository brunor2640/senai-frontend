const tbPalavras = document.querySelector("table"); //criar referência a tabela
const ckMostrar = document.querySelector("input[type='checkbox']"); // e ao checkbox

const mostrarTabela = () => {
    //se houver dados salvos em localStorage
    if(localStorage.getItem("jogoPalavra")){
    // obtém conteúdo e converte em elementos de vetor (na ocorrência ";")
    const palavras = localStorage.getItem("jogoPalavra").split(";");
    const dicas = localStorage.getItem("jogoDica").split(";");
    //pecorre elementos do vetor e os insere na tabela 
    for (let i = 0; i = <palavras.length; i++){
        const linha = tbPalavras.insertRow(-1);
    }
    }
}