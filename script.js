/* Global interactions: navbar scroll, smooth-scroll, reveal animations, skill counters, theme persistence */

$(document).ready(function () {
  $(window).scroll(function () {
    // checks if window is scrolled more than 550px, adds/removes solid class
    if ($(this).scrollTop() > 550) {
      $('.navbar').addClass('solid');
      $('.back-to-top').addClass('visible');
    } else {
      $('.navbar').removeClass('solid');
      $('.back-to-top').removeClass('visible');
    }
  });
});

// Smooth scrolling for anchors
$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});

// IIFE for plain DOM behaviors (reveal, counters, theme persistence)
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    // Theme persistence: read stored preference and wire toggle
    const toggleBtn = document.getElementById('theme-toggle');
    try {
      const saved = localStorage.getItem('site-theme');
      if (saved === 'dark') document.body.classList.add('dark');
      if (saved === 'light') document.body.classList.remove('dark');
    } catch (e) {}

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark');
        try { localStorage.setItem('site-theme', isDark ? 'dark' : 'light'); } catch (e) {}
      });
    }

    // Elements to get reveal animation
    const revealSelectors = [
      '.home-content .name h1',
      '.home-content .name p',
      '.angle-down-icon a',
      '.about-heading',
      '.about-content .left-content img',
      '.about-content .left-content p',
      '.skills-heading',
      '.skills .bar',
      '.proj-heading h1',
      '.proj-1',
      '.proj-2',
      '.contact-content h2',
      '.contact-content .mail'
    ];

    revealSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => el.classList.add('reveal'));
    });

    // skill class -> numeric percentage mapping
    //const skillMap = { html: 90, css: 80, bootstrap: 75, javascript: 70, c: 85 };

    // Insert percent labels (initially 0%) next to each skill info
    document.querySelectorAll('.skills .bar').forEach(bar => {
      const info = bar.querySelector('.info span');
      if (info && !bar.querySelector('.skill-percent')) {
        const clsSpan = bar.querySelector('.progress-line span');
        let percent = 0;
        if (clsSpan) {
          const classList = Array.from(clsSpan.classList);
          for (const c of classList) if (skillMap[c]) percent = skillMap[c];
        }
        const pct = document.createElement('span');
        pct.className = 'skill-percent';
        pct.textContent = percent ? '0%' : '';
        info.insertAdjacentElement('afterend', pct);
      }
    });

    // Reveal observation
    const revealTargets = Array.from(document.querySelectorAll('.reveal'));

    function animateSkillCounters() {
      const spans = Array.from(document.querySelectorAll('.progress-line span'));
      spans.forEach(span => {
        const cls = Array.from(span.classList).find(c => skillMap[c]);
        const target = cls ? skillMap[cls] : 0;
        const pctEl = span.closest('.bar') ? span.closest('.bar').querySelector('.skill-percent') : null;
        if (!target || !pctEl) return;
        let start = null;
        const duration = 1000;
        const step = timestamp => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const value = Math.round(progress * target);
          pctEl.textContent = value + '%';
          if (progress < 1) requestAnimationFrame(step);
          else pctEl.textContent = target + '%';
        };
        requestAnimationFrame(step);
      });
    }

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            // stagger reveal of multiple reveal children
            const children = Array.from(el.querySelectorAll ? el.querySelectorAll('.reveal') : []);
            if (children.length > 1) children.forEach((ch, i) => setTimeout(() => ch.classList.add('in-view'), i * 120));
            el.classList.add('in-view');

            // if skills container or contains skills, animate skill counters
            if (el.classList && (el.classList.contains('skills') || el.closest('.skills'))) {
              animateSkillCounters();
            }

            obs.unobserve(el);
          }
        });
      }, { threshold: 0.12 });

      revealTargets.forEach(t => io.observe(t));
    } else {
      revealTargets.forEach((t, i) => setTimeout(() => t.classList.add('in-view'), i * 80));
      setTimeout(animateSkillCounters, 600);
    }
  });
})();
$(document).ready(function () {
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }

    });
});

// Reveal animations and skill bar trigger using IntersectionObserver
document.addEventListener('DOMContentLoaded', function () {
    const selectors = ['.about-me', '#my-works', '.contact', '.home-content', '.proj-1', '.proj-2', '.skills'];
    const targets = selectors.map(s => Array.from(document.querySelectorAll(s))).flat();

    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    if (entry.target.classList.contains('skills')) {
                        entry.target.classList.add('in-view');
                    }
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        targets.forEach(t => io.observe(t));
    } else {
        setTimeout(() => targets.forEach(t => t.classList.add('in-view')), 600);
    }
});


$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});