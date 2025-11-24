// -------------------------------------------
// Load mock data
// -------------------------------------------
const trackingData =
  JSON.parse(localStorage.getItem("trackingMockData")) || {};

// Detect tracking system from the page
const system = document.body.dataset.system; // "pars" or "vnacss"

// DOM references
const form = document.querySelector(".tracking-form");
const input = document.querySelector(".tracking-input");
const resultBox = document.querySelector(".tracking-results");

// -------------------------------------------
// Helper to render results
// -------------------------------------------
function renderResult(data, id) {
  if (!data) {
    resultBox.innerHTML = `
      <div class="no-result">
        No results found for: <strong>${id}</strong>
      </div>
    `;
    return;
  }

  if (system === "pars") {
    resultBox.innerHTML = `
      <table class="tracking-table">
        <tr><th>PARS Number</th><td>${id}</td></tr>
        <tr><th>Status</th><td>${data.status}</td></tr>
        <tr><th>Carrier</th><td>${data.carrier}</td></tr>
        <tr><th>Port of Entry</th><td>${data.port}</td></tr>
        <tr><th>Last Updated</th><td>${data.updated}</td></tr>
        <tr><th>Reference</th><td>${data.reference}</td></tr>
        <tr><th>Notes</th><td>${data.notes}</td></tr>
      </table>
    `;
  }

  if (system === "vnacss") {
    resultBox.innerHTML = `
      <table class="tracking-table">
        <tr><th>Declaration No.</th><td>${id}</td></tr>
        <tr><th>Status</th><td>${data.status}</td></tr>
        <tr><th>Port</th><td>${data.port}</td></tr>
        <tr><th>Declaration Type</th><td>${data.declarationType}</td></tr>
        <tr><th>Last Updated</th><td>${data.updated}</td></tr>
        <tr><th>Notes</th><td>${data.notes}</td></tr>
      </table>
    `;
  }
}

// -------------------------------------------
// Form submission
// -------------------------------------------
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const id = input.value.trim();

  if (!id) return;

  const result = trackingData[system][id];
  renderResult(result, id);
});
