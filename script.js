const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle Nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});

// Show Model
open.addEventListener('click', () => {
  modal.classList.add('show-modal');
});

// Hide Model
close.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

// Hide modal from outside click
window.addEventListener('click', (e) => {
  e.target == modal ? modal.classList.remove('show-modal') : false;
});
