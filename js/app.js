const header = document.querySelector('.header'),
  sidebar = document.querySelector('.sidebar__logo'),
  col_1 = document.querySelector('.col-1'),
  button = document.querySelector('.header__menu-button');

header.style.height = String(sidebar.offsetHeight) + 'px';
button.addEventListener('click', () => {
  col_1.classList.toggle('sidebar--toggle');
});
// 40% y luego a 0
