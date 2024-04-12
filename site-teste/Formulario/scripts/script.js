const form = document.getElementById("form");
const form = document.getElementById("email");
const form = document.getElementById("password");
const form = document.getElementById("password-confirmation");

form.addEventListener("submit", (Event) => {
    Event.preventDefault();

    checkform();

})

email.addEventListener("blur", () => {
    Event.preventDefault();
    checkform();

})

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
    erroInput(email,  "Email Obrigatório. ")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPassword(){
    const passwordValue = password.value;
    
    if(passwordValue === ""){
    erroInput(password, "Senha Obrigatoria. ")
   }else if(passwordValue.length < 8){
       erroInput(password, "Senha preciar ter no minimo 8 caracteres. ")
   }else{
        formItem = password.parentElement;
        formItem.className = "form-content"
   }

    }
function checkInputPasswordConfimation(){
    const passwordValue = password.value;
    const 
}