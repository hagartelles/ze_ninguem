//   Mobile menu

const menuMobile = document.getElementById('nav-bar-mobile');
const btnMenu = document.getElementById('btn-menu');

menuMobile.addEventListener(' click', animateMenu);

function animateMenu(){
    menuMobile.classList.toggle('mobileMenu');
    btnMenu.classList.toggle('activeBtn');
}


// SLIDER 
let radio = document.querySelector('.manual-btn');
let count = 1

document.getElementById('radio1').checked = true;

setInterval(()=> {
    nextImg()
}, 5000)

function nextImg(){
    count++

    if (count > 3){
        count = 1
    }

    document.getElementById('radio'+count).checked = true;
}


