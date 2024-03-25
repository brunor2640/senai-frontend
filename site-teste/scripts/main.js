
function mudarh1() {
const novaH1 = document.querySelector("h1");
novaH1.textContent = "Olá Mundo!";
}
// "H1" vem do index

// let time = "saopaulo"
// if (time = "saopaulo") {
//     alert ("Time do coração São Paulo")
// } else {
//     alert ("OUtro Time não importa")
    
// }
function verificarTime() {
let time = prompt ("Digite seu Time");
if (time === "saopaulo") {
    alert ("Time do coração São Paulo");
} else {
    alert ("Outro Time não importa");
    window.location.href = "http://www.google.com"
    
}

}

document.querySelector("img").addEventListener("click", verificarTime);