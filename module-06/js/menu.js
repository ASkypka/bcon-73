const menuBtns = document.querySelectorAll('.js-menu-btn');
const menuEl = document.querySelector('.menu-container');

menuBtns.forEach(btn => {
  btn.addEventListener('click', event => {
    menuEl.classList.toggle('is-open');
  });
});
