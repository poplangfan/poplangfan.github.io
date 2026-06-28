// Navigation scroll effect
const nav = document.getElementById('nav');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-links');
if (toggle && navMenu) {
  toggle.addEventListener('click', () => navMenu.classList.toggle('open'));
  navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navMenu.classList.remove('open')));
}

// Highlight current section in nav
function updateActiveNav() {
  const scrollPos = window.scrollY + 80;
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop;
    if (scrollPos >= top) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current ? 'var(--text-primary)' : '';
  });
}

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.project-card, .about-card, .skill-group, .timeline-content, .patent-item').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// Add subtle parallax to hero gradient
window.addEventListener('scroll', () => {
  const hero = document.getElementById('hero');
  if (!hero) return;
  const scrolled = window.scrollY;
  const pseudo = hero.querySelector('::before');
  // Instead animate the gradient via style
  const gradient = hero.querySelector('::before');
});

// Dynamic copyright year
const yearSpan = document.querySelector('.footer-text');
if (yearSpan) {
  yearSpan.textContent = yearSpan.textContent.replace('2026', new Date().getFullYear().toString());
}
