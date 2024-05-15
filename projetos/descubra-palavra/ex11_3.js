const frm = document.querySelector("form"); //criar referencia ao form

frm.addEventListener("submit", (e)=>{
    e.preventDefault(); //evitar o evio do form
    //obtém conteúdo dos campos(.trim()remove espaços na palavra no início e fim)
    const palavra = frm.inPalavra.value.trim();
    const dica = frm.inDica.value 

    //valida preenchimento (palavra nâo deve possuir espaço em branco no meio)
    if(palavra.includes("")){
        alert("Informe uma palavra válida (sem espaço)");
        frm.inPalava.focus();
        return;
    }
    //se já existem dados em localSorage, grava contúdo anterior+ ";"+palavra / dica
    if(localStorage.getItem("jogoPalavra")){
        localStorage.setItem("jogoPalavra", 
        localStorage.setItem("jogoPalavra") + ";" + dica);
    }else{
    //senão, é a primeira inclusão: grava apenas a palavra / dica
    localStorage.setItem("jogoPalavra", palavra);
    localStorage.setItem("jogoDica", dica);
   }
   //verificar se salvou
   if(localStorage.getItem("jogoPalavra")){
       alert(`Ok! Palavra ${palavra} Cadastrada com Sucesso`);
   }

   frm.reset(); //limpar foco em inPalavra
});