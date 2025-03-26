// JavaScript pour les effets de la barre de navigation lors du défilement
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});
