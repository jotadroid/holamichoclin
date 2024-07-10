document.addEventListener("DOMContentLoaded", function(){
    const btnLogin = document.querySelector("#btnLogin");
    let password = document.querySelector("#password");
    const wrongPassword = document.querySelector("#wrongPassword");
    let loginCount = 0;

    const realPass = "tobychoclin";

    btnLogin.addEventListener("click", function() {
        loginCount++;
        if (password.value==""){
            wrongPassword.innerText = "Por favor escribe una contraseña"
        }
        else if (password.value==realPass){
            wrongPassword.innerText = "Correcto!"
        }
        else {
            wrongPassword.innerText = "Intenta de nuevo"
        }
    })
}) 