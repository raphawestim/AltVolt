const menuMobile = document.querySelector('.menu-mobile');
console.log(menuMobile);

menuMobile.addEventListener('click', () => {
  console.log('Clicou no menu');
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
});