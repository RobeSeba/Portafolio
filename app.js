const menu = document.getElementById("menu-navegacion")
const nombre= document.getElementById("nombre")
const dataNombre = "Hola, Soy Roberto Magino".split("")
const velocidadEscritura = 100;

function escribir(array){
    for (let index = 0; index < array.length; index++) {
        const retraso= velocidadEscritura * index;
        setTimeout(()=>{
            nombre.innerHTML += array[index];
        },retraso)
    }
}


window.addEventListener("scroll",()=>{
    const scrollPosition = window.scrollY;
    if (scrollPosition>0) {
        menu.style.opacity="0.5"

    }else{
        menu.style.opacity="1"
    }
    
})

escribir(dataNombre)