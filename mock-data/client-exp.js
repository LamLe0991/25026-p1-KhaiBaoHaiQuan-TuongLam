const clientExperience = {
  clientExp: [
    {
      logo: "/Images/storkcaft.png",
      quote:
        "Their attention to detail and deep customs knowledge give us the confidence we need to move goods across borders without stress.",
      personImg: "/Images/icone-people2.png",
      role: "Logistics Manager",
      company: "Stork Caft",
    },
    {
      logo: "/Images/noel-asmar.png",
      quote:
        "They always go the extra mile to ensure our shipments are compliant and arrive on schedule. A truly outstanding partner.",
      personImg: "/Images/icone-people3.png",
      role: "Director of Imports",
      company: "Noel Asmar Uniform",
    },
  ],
};

// SAVE IT
localStorage.setItem("clientExperience", JSON.stringify(clientExperience));
console.log("All client experience saved!");
