const btnMenu = document.querySelector('.bar');
const menu = document.querySelector('.nav__menu');

btnMenu.addEventListener('click', e => {
  e.preventDefault();
  menu.classList.toggle('active');
});
