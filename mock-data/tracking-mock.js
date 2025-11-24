// -------------------------------------------
// MOCK TRACKING DATA
// -------------------------------------------
const trackingMockData = {
  pars: {
    "ABC123": {
      status: "Released",
      carrier: "Purolator",
      updated: "2025-01-04 14:23",
      port: "Windsor",
      reference: "REF-9981",
      notes: "Shipment has cleared customs."
    },
    "XYZ789": {
      status: "In Review",
      carrier: "FedEx",
      updated: "2025-01-03 09:10",
      port: "Fort Erie",
      reference: "REF-7721",
      notes: "Awaiting CBSA review."
    }
  },

  vnacss: {
    "VN001122": {
      status: "Pending Verification",
      port: "Cat Lai Port",
      updated: "2025-01-05 16:40",
      declarationType: "Import",
      notes: "Waiting for duty payment confirmation."
    },
    "VN883312": {
      status: "Released",
      port: "Noi Bai Airport",
      updated: "2025-01-02 10:55",
      declarationType: "Export",
      notes: "Shipment cleared and waiting pickup."
    }
  }
};

// -------------------------------------------
// SAVE ONLY IF NOT ALREADY SET
// -------------------------------------------
if (!localStorage.getItem("trackingMockData")) {
  localStorage.setItem("trackingMockData", JSON.stringify(trackingMockData));
  console.log("Mock tracking data saved!");
}
