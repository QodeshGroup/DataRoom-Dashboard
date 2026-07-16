// Kilifi Legacy Estates Data Room — shared interactivity
document.addEventListener('DOMContentLoaded', function () {
  // Mobile sidebar toggle
  var menuBtn = document.querySelector('.menu-btn');
  var sidebar = document.querySelector('.sidebar');
  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (window.innerWidth <= 980 && sidebar.classList.contains('open')) {
        if (!sidebar.contains(e.target) && e.target !== menuBtn) {
          sidebar.classList.remove('open');
        }
      }
    });
  }

  // Animate progress bars & gantt bars on load
  requestAnimationFrame(function () {
    document.querySelectorAll('.progress-fill, .gantt-bar').forEach(function (el) {
      var target = el.getAttribute('data-width');
      if (target) {
        el.style.width = '0%';
        setTimeout(function () { el.style.width = target + '%'; }, 60);
      }
    });
  });

  // Animate SVG readiness ring
  document.querySelectorAll('.ring-fill').forEach(function (ring) {
    var pct = parseFloat(ring.getAttribute('data-pct') || '0');
    var circumference = 2 * Math.PI * parseFloat(ring.getAttribute('r'));
    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset = circumference;
    setTimeout(function () {
      ring.style.transition = 'stroke-dashoffset 1.2s ease';
      ring.style.strokeDashoffset = circumference * (1 - pct / 100);
    }, 100);
  });

  // Optional: toggle checklist item done state (demo only, not persisted)
  document.querySelectorAll('.check-item .box').forEach(function (box) {
    box.addEventListener('click', function () {
      box.closest('.check-item').classList.toggle('done');
    });
  });

  // Team Documents — wire up shared folder link from assets/document-links.js
  var sectionKey = document.body.getAttribute('data-section');
  var link = document.getElementById('team-docs-link');
  var hint = document.getElementById('team-docs-hint');
  if (sectionKey && link && window.SECTION_DOCS) {
    var url = window.SECTION_DOCS[sectionKey];
    var isConfigured = url && url.indexOf('REPLACE_ME') === -1;
    if (isConfigured) {
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.classList.remove('disabled');
      link.textContent = 'Open Shared Folder ↗';
      if (hint) hint.textContent = 'Upload finished documents or download what the team has already shared.';
    } else {
      link.classList.add('disabled');
      link.removeAttribute('href');
      if (hint) hint.textContent = 'Not connected yet — add this section\'s Drive/Dropbox folder link in assets/document-links.js';
    }
  }
});
