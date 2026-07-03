// ==========================================
// DELICIAS DE MI TIERRA
// script.js
// ==========================================

// Mostrar u ocultar la descripción de un plato

function mostrarInfo(id) {

const descripcion = document.getElementById(id);  

if (descripcion.style.display === "block") {  

    descripcion.style.display = "none";  

} else {  

    descripcion.style.display = "block";  

}

}

// Resaltar la tarjeta al hacer clic

const tarjetas = document.querySelectorAll(".tarjeta");

tarjetas.forEach(function(tarjeta){

tarjeta.addEventListener("click", function(){  

    tarjeta.style.transform = "scale(1.03)";  

    setTimeout(function(){  

        tarjeta.style.transform = "scale(1)";  

    },200);  

});

});

// ==========================================
// PARTÍCULAS DORADAS
// ==========================================

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "-1";

const ctx = canvas.getContext("2d");

function ajustarCanvas() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

window.addEventListener("resize", ajustarCanvas);
ajustarCanvas();

const particulas = [];

for (let i = 0; i < 80; i++) {

particulas.push({  

    x: Math.random() * canvas.width,  
    y: Math.random() * canvas.height,  
    radio: Math.random() * 2 + 1,  
    velocidad: Math.random() * 0.5 + 0.2,  
    opacidad: Math.random()  

});

}

function animar() {

ctx.clearRect(0, 0, canvas.width, canvas.height);  

particulas.forEach((p) => {  

    ctx.beginPath();  

    ctx.arc(p.x, p.y, p.radio, 0, Math.PI * 2);  

    ctx.fillStyle = `rgba(255,215,0,${p.opacidad})`;  

    ctx.fill();  

    p.y -= p.velocidad;  

    if (p.y < -10) {  

        p.y = canvas.height + 10;  
        p.x = Math.random() * canvas.width;  

    }  

});  

requestAnimationFrame(animar);

}

animar();
