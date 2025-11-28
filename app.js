const menu = document.getElementById("menu-navegacion")
window.addEventListener("scroll",()=>{
    const scrollPosition = window.scrollY;
    if (scrollPosition>0) {
        menu.style.opacity="0.5"
    }else{
        menu.style.opacity="1"
    }
    
})