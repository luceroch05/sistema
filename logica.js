document.getElementById("login-button").addEventListener("click", function() {
    document.querySelector(".panel-login").style.display = "none";
    document.querySelector(".panel-interfaz").style.display = "block";
    document.querySelector(".navegacion").style.display = "flex";
});


document.getElementById("c1").addEventListener('click', function() {
    document.querySelector(".cont-bienvenido").style.display = "none"; 
    document.querySelector(".cursos-container").style.display = "none";
    document.querySelector(".panel-curso").style.display = "block";
    document.querySelector(".panelCurso1").style.display = "block";
    document.querySelector(".panelCurso2").style.display = "none"; 
    document.querySelector(".panelCurso3").style.display = "none"; 
});

document.getElementById("c2").addEventListener('click', function() {
    document.querySelector(".cont-bienvenido").style.display = "none"; 
    document.querySelector(".cursos-container").style.display = "none";
    document.querySelector(".panel-curso").style.display = "block";
    document.querySelector(".panelCurso1").style.display = "none";
    document.querySelector(".panelCurso2").style.display = "block"; 
    document.querySelector(".panelCurso3").style.display = "none"; 
});

document.getElementById("c3").addEventListener('click', function() {
    document.querySelector(".cont-bienvenido").style.display = "none"; 
    document.querySelector(".cursos-container").style.display = "none";
    document.querySelector(".panel-curso").style.display = "block"; 
    document.querySelector(".panelCurso1").style.display = "none"; 
    document.querySelector(".panelCurso2").style.display = "none"; 
    document.querySelector(".panelCurso3").style.display = "block"; 
});

document.getElementById("btnanterior").addEventListener('click', function(){
    document.querySelector(".cont-bienvenido").style.display = "flex"; 
    document.querySelector(".cursos-container").style.display = "flex"; 
    document.querySelector(".panel-curso").style.display = "none";
});

document.getElementById("btnanterior2").addEventListener('click', function() {
    document.querySelector(".cont-bienvenido").style.display = "flex";
    document.querySelector(".cursos-container").style.display = "flex";
    document.querySelector(".panel-curso").style.display = "none";
    document.querySelector(".panel-interfaz").style.display = "block";
});


document.getElementById("btnanterior3").addEventListener('click', function() {
    document.querySelector(".cont-bienvenido").style.display = "flex";
    document.querySelector(".cursos-container").style.display = "flex";
    document.querySelector(".panel-curso").style.display = "none";
    document.querySelector(".panel-interfaz").style.display = "block";
});