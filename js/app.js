(function() {
  // Var declaration
  const header = document.querySelector('.header'),
    sidebar = document.querySelector('.sidebar__logo'),
    col_1 = document.querySelector('.col-1'),
    button = document.querySelector('.header__menu-button'),
    yearSpan = document.querySelector('#footer_year'),
    date = new Date();

  // Height fix to nav
  header.style.height = String(sidebar.offsetHeight) + 'px';

  // Button for sidebar slide
  button.addEventListener('click', () => {
    if (window.innerWidth > 990) {
      col_1.classList.toggle('sidebar--toggle');
    } else if (window.innerWidth < 990) {
      col_1.classList.toggle('sidebar--toggle-inverse');
    }
  });

  // Footer year
  yearSpan.innerText = date.getFullYear();
})();
