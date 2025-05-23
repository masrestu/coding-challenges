const menuOpen = document.querySelector('#open-menu');
const menuClose = document.querySelector('#close-menu');
const menu = document.querySelector('header nav');
const overlay = document.querySelector('.overlay');

menuOpen.addEventListener('click', () => {
  menu.classList.add('open');
  menu.classList.add('slide-in');
  overlay.classList.add('fade-in');
  setTimeout(() => {
    menu.classList.remove('slide-in');
    overlay.classList.remove('fade-in');
  }, 500)
})

menuClose.addEventListener('click', () => {
  menu.classList.add('slide-out');
  overlay.classList.add('fade-out');
  setTimeout(() => {
    menu.classList.remove('open');
    menu.classList.remove('slide-out');
    overlay.classList.remove('fade-out');
  }, 500)
})

window.onresize = () => {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
    menu.classList.add('slide-out');
    overlay.classList.add('fade-out');
    setTimeout(() => {
      menu.classList.remove('slide-out');
      overlay.classList.remove('fade-out');
    }, 500)
  }
}