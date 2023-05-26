//   Mobile menu

const menuMobile = document.getElementById('nav-bar-mobile');
const btnMenu = document.getElementById('btn-menu');
const modalForm = document.getElementById('window-modal-form');

menuMobile.addEventListener(' click', animateMenu);

function animateMenu(){
    
    menuMobile.classList.toggle('mobileMenu');
    btnMenu.classList.toggle('activeBtn');
    
}

// modal 

function openForm(){
    modalForm.classList.add('opened')
    
    modalForm.addEventListener("click",(e) => {
        if (e.target.classList == 'close-btn'|| e.target.id == 'window-modal-form'){
           modalForm.classList.remove('opened') 
        }
    })

    modalForm.addEventListener("scroll",(e) =>{
        modalForm.classList.remove('opened') 
    })

    modalForm.addEventListener("scrollend",(e) =>{
        modalForm.classList.remove('opened') 
        console.log(1)
    })
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


