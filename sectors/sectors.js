// Load all sectors' testimonials
const allData = JSON.parse(localStorage.getItem("sectorTestimonials") || "{}");

// Find the target container
const container = document.querySelector(".sector-testimonials");

if (!container) {
  console.warn("No testimonials section found.");
} else {

  // Get sector name
  const sector = container.dataset.sector;

  if (!sector || !allData[sector]) {
    container.innerHTML = "<p>No testimonials available.</p>";
  } else {

    const testimonials = allData[sector];

    container.innerHTML = "";

    testimonials.forEach((t, index) => {
      if (index > 0) {
        const divider = document.createElement("div");
        divider.classList.add("divider");
        container.appendChild(divider);
      }

      const block = document.createElement("div");
      block.classList.add("testimonial");
      block.innerHTML = `
        <div class="testimonial-logo">
          <img src="${t.logo}" alt="Company Logo" />
        </div>
        <p class="testimonial-quote">${t.quote}</p>
        <div class="testimonial-person">
          <img src="${t.personImg}" alt="Person" />
          <div>
            <div class="person-role">${t.role}</div>
            <div class="person-company">${t.company}</div>
          </div>
        </div>
      `;
      container.appendChild(block);
    });
  }
}
