/**
 * main.js — Navigation, animations, language toggle, misc interactions
 * Depends on i18n.js (loaded first)
 */

(function () {
  'use strict';

  // ═══════════════════════════════════════════
  // Language Toggle
  // ═══════════════════════════════════════════
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = this.dataset.lang;
      if (lang) setLang(lang);
    });
  });

  // ═══════════════════════════════════════════
  // Active Nav Tracking (IntersectionObserver)
  // ═══════════════════════════════════════════
  var navLinks = document.querySelectorAll('.nav-link');
  var sections = document.querySelectorAll('section[id]');

  if (navLinks.length && sections.length) {
    var observerOptions = {
      rootMargin: '-80px 0px -60% 0px',
      threshold: 0
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.getAttribute('id');
        navLinks.forEach(function (link) {
          var href = link.getAttribute('href');
          var isActive = href === '#' + id;
          link.classList.toggle('active', isActive);
        });
      });
    }, observerOptions);

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // ═══════════════════════════════════════════
  // Fade-in on scroll
  // ═══════════════════════════════════════════
  var fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(function (el) {
    fadeObserver.observe(el);
  });

  // ═══════════════════════════════════════════
  // Dynamic copyright year
  // ═══════════════════════════════════════════
  var yearSpan = document.getElementById('copy-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  // ═══════════════════════════════════════════
  // Spotlight — mouse-follow effect (desktop)
  // ═══════════════════════════════════════════
  var spotlight = document.querySelector('.spotlight');
  if (spotlight && window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', function (e) {
      var x = e.clientX;
      var y = e.clientY;
      spotlight.style.background = 'radial-gradient(' +
        '600px circle at ' + x + 'px ' + y + 'px, ' +
        'rgba(29, 78, 216, 0.15), ' +
        'transparent 80%)';
    });
  }

})();
