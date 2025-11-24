document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  if (!form) return; // No form found (safety check)

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Extract field values
    const entry = {
      firstName: document.querySelector("#firstName").value.trim(),
      lastName: document.querySelector("#lastName").value.trim(),
      email: document.querySelector("#email").value.trim(),
      phone: document.querySelector("#phone").value.trim(),
      company: document.querySelector("#company").value.trim(),
      service: document.querySelector("#service").value.trim(),
      industry: document.querySelector("#industry").value.trim(),
      message: document.querySelector("#message").value.trim(),
      submittedAt: new Date().toISOString()
    };

    // Basic validation (only required fields)
    if (!entry.firstName || !entry.lastName || !entry.email || !entry.company) {
      alert("Please fill in all required fields.");
      return;
    }

    // Retrieve existing entries
    let stored = JSON.parse(localStorage.getItem("letsConnectMessages")) || [];

    // Add new entry
    stored.push(entry);

    // Save back to localStorage
    localStorage.setItem("letsConnectMessages", JSON.stringify(stored));

    // Confirmation for demo
    alert("Your message has been submitted (saved in localStorage).");

    // Reset form
    form.reset();
  });
});
