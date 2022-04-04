const navMenu = document.querySelector('#nav-menu');
const menuBtn = document.querySelector('#menu-btn');
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelectorAll('.navbar-link a');

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
