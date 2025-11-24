// Load all client's experience
const allData = JSON.parse(localStorage.getItem("clientExperience") || "{}");
// Find the target container
const container = document.querySelector(".client-experience");

if (!container) {
  console.warn("No experience section found.");
} else {

  // Get client exp
  const expKey = container.dataset.experience;

  if (!expKey || !allData[expKey]) {
    container.innerHTML = "<p>No experience available.</p>";
  } else {

    const experience = allData[expKey];

    container.innerHTML = "";

    experience.forEach((t, index) => {
      if (index > 0) {
        const divider = document.createElement("div");
        divider.classList.add("divider");
        container.appendChild(divider);
      }

      const block = document.createElement("div");
      block.classList.add("client-exp");
      block.innerHTML = `
        <div class="client-logo">
          <img src="${t.logo}" alt="Company Logo" />
        </div>
        <p class="client-quote">${t.quote}</p>
        <div class="exp-person">
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
