
document.getElementById("login-button").addEventListener("click", function() {
    // Oculta el panel de inicio de sesión
    document.querySelector(".panel-login").style.display = "none";
    
    // Muestra el nuevo panel
    document.querySelector(".panel-interfaz").style.display = "block";
});

/* Focus y Blur para los Inputs */
document.getElementById("username").addActionListener("focus", function() {
    if(this.value == "username"){
        this.value = "";
    }
});

document.getElementById("username").addActionListener("blur", function(){
    if(this.value == ""){
        this.value = "username";
    }
});

document.getElementById("password").addActionListener("focus", function(){
    if (this.value == "password") {
        this.value = "";
    }
});

document.getElementById("password").addActionListener("blur", function(){
    if(this.value == ""){
        this.value = "password";
    }
});
