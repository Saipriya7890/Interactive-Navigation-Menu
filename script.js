const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('main section');

window.addEventListener('scroll', () => {
  const current = sections.length - [...sections].reverse().findIndex(section => window.scrollY >= section.offsetTop - navbar.offsetHeight) - 1;
  const isActive = (current >= 0 && current < sections.length);

  if (isActive) {
    const links = navbar.querySelectorAll('ul li a');
    links.forEach(link => link.classList.remove('active'));
    links[current].classList.add('active');
  }

  document.body.style.backgroundColor = isActive ? 'lightblue' : '#f0f0f0'; 
});


