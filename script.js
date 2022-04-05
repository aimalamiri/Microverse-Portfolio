const navMenu = document.querySelector('#nav-menu');
const menuBtn = document.querySelector('#menu-btn');
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelectorAll('.navbar-link a');

const seeProjectBtn = document.querySelectorAll('.see-project-btn');
const projectModal = document.querySelector('#project-modal');
const modalPro = document.querySelector('.modal');
const modalClose = document.querySelector('#modal-close');



function swapMenuIcon() {
  if (navMenu.classList.contains('d-block')) {
    menuIcon.src = './assets/png/close.png';
  } else {
    menuIcon.src = './assets/svg/menu.svg';
  }
}

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('d-block');
  swapMenuIcon();
});

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', () => {
    navMenu.classList.remove('d-block');
    swapMenuIcon();
  });
}

for (let i = 0; i < seeProjectBtn.length; i += 1) {
  seeProjectBtn[i].addEventListener('click', () => {
    document.querySelector('body').style.overflowY = 'hidden';
    projectModal.classList.toggle('d-hide');
    projectModal.style.top = window.pageYOffset + 'px';

  });
}

modalClose.addEventListener('click', () => {
  projectModal.classList.add('d-hide');
 document.querySelector('body').style.overflowY = 'auto';
})