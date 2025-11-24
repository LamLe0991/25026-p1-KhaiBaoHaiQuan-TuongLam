// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');

  // If menu is being closed, also close any open submenus
  if (!navbar.classList.contains('active')) {
    document.querySelectorAll('.navbar .dropdown.open').forEach((li) => {
      li.classList.remove('open');
      const t = li.querySelector(':scope > .dropdown-toggle');
      if (t) t.setAttribute('aria-expanded', 'false');
    });
  }
});

// Close menu when a non-toggle link is clicked (mobile)
document.querySelectorAll('nav a:not(.dropdown-toggle)').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navbar.classList.remove('active');

    // also close any open dropdowns
    document.querySelectorAll('.navbar .dropdown.open').forEach((li) => {
      li.classList.remove('open');
      const t = li.querySelector(':scope > .dropdown-toggle');
      if (t) t.setAttribute('aria-expanded', 'false');
    });
  });
});

// Mobile dropdown toggle behavior
const dropdownToggles = document.querySelectorAll('.navbar .dropdown > .dropdown-toggle');

function isMobileMode() {
  // Consider mobile when hamburger is visible or navbar is active
  const hamburgerVisible = getComputedStyle(hamburger).display !== 'none';
  return hamburgerVisible || navbar.classList.contains('active');
}

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener('click', (e) => {
    if (!isMobileMode()) return; // desktop uses hover CSS

    e.preventDefault();
    const parent = toggle.parentElement; // li.dropdown

    // Close other open dropdowns
    parent.parentElement.querySelectorAll('.dropdown.open').forEach((openLi) => {
      if (openLi !== parent) {
        openLi.classList.remove('open');
        const t = openLi.querySelector(':scope > .dropdown-toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      }
    });

    // Toggle this dropdown
    const nowOpen = !parent.classList.contains('open');
    parent.classList.toggle('open');
    toggle.setAttribute('aria-expanded', nowOpen ? 'true' : 'false');
  });
});

// Close open dropdowns when clicking outside (mobile)
document.addEventListener('click', (e) => {
  if (!isMobileMode()) return;
  const insideDropdown = e.target.closest('.navbar .dropdown');
  if (!insideDropdown) {
    document.querySelectorAll('.navbar .dropdown.open').forEach((li) => {
      li.classList.remove('open');
      const t = li.querySelector(':scope > .dropdown-toggle');
      if (t) t.setAttribute('aria-expanded', 'false');
    });
  }
});

// On resize to desktop, reset mobile-only state
window.addEventListener('resize', () => {
  const hamburgerVisible = getComputedStyle(hamburger).display !== 'none';
  if (!hamburgerVisible) {
    document.querySelectorAll('.navbar .dropdown.open').forEach((li) => {
      li.classList.remove('open');
      const t = li.querySelector(':scope > .dropdown-toggle');
      if (t) t.setAttribute('aria-expanded', 'false');
    });
  }
});
