/* ============================================
   WHITE WOLF LABS — JS
   ============================================ */

(function () {
  'use strict';

  /* ─── CUSTOM CURSOR ─── */
  const cursor = document.getElementById('cursor');
  const cursorDot = document.getElementById('cursorDot');

  if (cursor && cursorDot && window.innerWidth > 768) {
    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    });

    const animateCursor = () => {
      curX += (mouseX - curX) * 0.12;
      curY += (mouseY - curY) * 0.12;
      cursor.style.left = curX + 'px';
      cursor.style.top = curY + 'px';
      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    const hoverTargets = document.querySelectorAll(
      'a, button, .service, .project, .testimonial, .tag, input, textarea, select'
    );
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  /* ─── NAV SCROLL ─── */
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  }, { passive: true });

  /* ─── HAMBURGER MENU ─── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('.mm-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ─── REVEAL ON SCROLL ─── */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // stagger siblings
        const siblings = entry.target.parentElement.querySelectorAll('.reveal');
        let delay = 0;
        siblings.forEach((sib, idx) => {
          if (sib === entry.target) delay = idx * 80;
        });
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ─── COUNTER ANIMATION ─── */
  const statNums = document.querySelectorAll('.stat-num');

  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const val = Math.round(easeOut(progress) * target);
      el.textContent = val;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => counterObserver.observe(el));

  /* ─── HERO HEADLINE STAGGER ─── */
  const heroLines = document.querySelectorAll('.hero-headline .line');
  heroLines.forEach((line, i) => {
    line.style.transitionDelay = `${0.15 + i * 0.12}s`;
  });

  // trigger hero on load
  window.addEventListener('load', () => {
    document.querySelectorAll('.hero .reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 200 + i * 120);
    });
  });

  /* ─── PARALLAX HERO BG TEXT ─── */
  const heroBgText = document.querySelector('.hero-bg-text');
  if (heroBgText) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      heroBgText.style.transform = `translate(-50%, calc(-50% + ${y * 0.3}px))`;
    }, { passive: true });
  }

  /* ─── SERVICE HOVER ─── */
  const services = document.querySelectorAll('.service');
  services.forEach(svc => {
    svc.addEventListener('mouseenter', () => {
      services.forEach(s => {
        if (s !== svc) s.style.opacity = '0.4';
      });
    });
    svc.addEventListener('mouseleave', () => {
      services.forEach(s => s.style.opacity = '');
    });
  });

  /* ─── PROJECT HOVER ─── */
  const projects = document.querySelectorAll('.project');
  projects.forEach(proj => {
    proj.addEventListener('mouseenter', () => {
      projects.forEach(p => {
        if (p !== proj) p.style.opacity = '0.5';
      });
    });
    proj.addEventListener('mouseleave', () => {
      projects.forEach(p => p.style.opacity = '');
    });
  });

  /* ─── CONTACT FORM ─── */
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');
  const submitBtn = form ? form.querySelector('.form-submit') : null;

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Simulate async submission
      setTimeout(() => {
        form.reset();
        submitBtn.textContent = 'Send Message ✦';
        submitBtn.disabled = false;
        successMsg.classList.add('show');
        setTimeout(() => successMsg.classList.remove('show'), 5000);
      }, 1200);
    });
  }

  /* ─── SMOOTH NAV LINKS ─── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ─── ACTIVE NAV LINK HIGHLIGHT ─── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link:not(.nav-cta)');

  const activateNav = () => {
    const scrollY = window.scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}`
            ? 'var(--text)'
            : '';
        });
      }
    });
  };

  window.addEventListener('scroll', activateNav, { passive: true });

})();
