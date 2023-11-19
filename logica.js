
document.getElementById("login-button").addEventListener("click", function() {
    // Oculta el panel de inicio de sesión
    document.querySelector(".panel-login").style.display = "none";
    
    // Muestra el nuevo panel
    document.querySelector(".panel-interfaz").style.display = "block";
});

