
const boton1 = document.getElementById("button1");
const imagen1 = document.getElementById("slider1");
boton1.addEventListener("click", () => {
    limpiar();
    imagen1.style.display = "block";
});

const boton2 = document.getElementById("button2");
const imagen2 = document.getElementById("slider2");
boton2.addEventListener("click", () => {
    limpiar()
    imagen2.style.display = "block";
});

const boton3 = document.getElementById("button3");
const imagen3 = document.getElementById("slider3");
boton3.addEventListener("click", () => {
    limpiar()
    imagen3.style.display = "block";
});

const boton4 = document.getElementById("button4");
const imagen4 = document.getElementById("slider4");
boton4.addEventListener("click", () => {
    limpiar()
    imagen4.style.display = "block";
});



function limpiar(){
    imagen1.style.display = "none"
    imagen2.style.display = "none"
    imagen3.style.display = "none"
    imagen4.style.display = "none"
}











let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let resultado = document.getElementById("resultado");
    suma.addEventListener("click", () => {
        resultado.innerHTML = parseInt(resultado.innerHTML) + 1
    });
    resta.addEventListener("click", () => {
        resultado.innerHTML = parseInt(resultado.innerHTML) - 1
    });















