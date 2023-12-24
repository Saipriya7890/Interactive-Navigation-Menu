
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const distanceFromTop = window.scrollY;

  if (distanceFromTop > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
