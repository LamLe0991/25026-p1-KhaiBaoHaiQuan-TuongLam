document.addEventListener("DOMContentLoaded", function() {
  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});

// Tab switching for Core Services (runs after DOM is ready)
document.querySelectorAll('.service-tab-btn').forEach((button) => {
  button.addEventListener('click', function () {
    const tabName = this.getAttribute('data-tab');
    
    // Remove active from all buttons and cards
    document.querySelectorAll('.service-tab-btn').forEach(btn => 
      btn.classList.remove('active')
    );
    document.querySelectorAll('.service-card').forEach(card => 
      card.classList.remove('active')
    );
    
    // Add active to clicked button and corresponding card
    this.classList.add('active');
    document.getElementById(tabName).classList.add('active');
  });
});