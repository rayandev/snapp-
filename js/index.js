let bar = document.querySelector(".bars-ico");
let menuArea = document.querySelector(".menu-area");

bar.addEventListener("click" , function mm(){
    bar.classList.toggle("fa-times");
    menuArea.classList.toggle("active-menu"); 
})