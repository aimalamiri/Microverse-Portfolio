let navMenu = document.querySelector('#nav-menu');
let menuBtn = document.querySelector('#menu-btn');
let menuIcon = document.querySelector('#menu-icon');
let navLinks =document.querySelectorAll('.navbar-link a');

menuBtn.addEventListener('click', function(e){
  navMenu.classList.toggle('d-block')
  swapMenuIcon();
});

for(let link of navLinks){
  link.addEventListener('click', function(e){
     navMenu.classList.remove('d-block');
     swapMenuIcon();
  });
}

function swapMenuIcon() {
  if(navMenu.classList.contains('d-block')){
    menuIcon.src = './assets/png/close.png';
  }else{
   menuIcon.src ='./assets/svg/menu.svg';
  }
}


