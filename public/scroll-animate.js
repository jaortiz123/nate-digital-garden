// scroll-animate.js
// Adds fade-in-up and staggered animation classes when elements enter viewport

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-up').forEach((el, i) => {
    el.classList.add('fade-in-up', `stagger-delay-${(i % 3) + 1}`);
    observer.observe(el);
  });
});
