const sectorTestimonials = {
  chemical: [
    {
      logo: "/Images/EverKem.png",
      quote:
        "Their expertise in chemical regulations and documentation has been exceptional. They provide insights and support that make our cross-border operations smooth and compliant.",
      personImg: "/Images/icone-people2.png",
      role: "Compliance Manager",
      company: "Ever Kem Chemicals",
    },
    {
      logo: "/Images/Cynamic.jpg",
      quote:
        "Reliable, professional, and always ahead of regulatory updates. Their knowledge in chemical logistics keeps our shipments moving without delays.",
      personImg: "/Images/icone-people1.png",
      role: "Operations Director",
      company: "Cynamic Chemical Corp.",
    },
  ],

  electronic: [
    {
      logo: "/Images/mondo.png",
      quote: "Their level of expertise and the quality of their work is exceptional. They have a multitude of resources to accompany us in the innovations our company makes. A partner of choice we highly recommend.",
      personImg: "/Images/icone-people2.png",
      role: "Controller",
      company: "Mondo",
    },
    {
      logo: "/Images/trux.png",
      quote: "A true partner—whether it’s transportation, customs, or logistics solutions, they always seem to be there to support.",
      personImg: "/Images/icone-people3.png",
      role: "VP Operations",
      company: "Trux Accessories",
    },
  ],

  fashion: [
        {
      logo: "/Images/Aritzia-Logo.png",
      quote: "“Their understanding of textile regulations and import requirements has streamlined our entire logistics process. A dependable partner in every season.",
      personImg: "/Images/icone-people4.png",
      role: "Supply Chain Manager",
      company: "Aritzia",
    },
    {
      logo: "/Images/oak-and-fort.png",
      quote: "Fast, accurate, and always attentive to detail. Their support keeps our releases on schedule and our compliance risk near zero.",
      personImg: "/Images/icone-people3.png",
      role: "Operations Director",
      company: "Oak and Fort",
    },
  ],
  food: [
            {
      logo: "/Images/idf.png",
      quote: "Their knowledge of food import regulations and CFIA requirements has saved us countless delays. A trusted partner for all of our shipments.",
      personImg: "/Images/icone-people2.png",
      role: "Quality Assurance Manager",
      company: "I-D Foods Corporation",
    },
    {
      logo: "/Images/left-coast.png",
      quote: "Always reliable and always on time. Their expertise in permits, food labeling, and border requirements keeps our products flowing smoothly into Canada.",
      personImg: "/Images/icone-people1.png",
      role: "Operations Director",
      company: "Left Coast Naturals",
    },
  ],
  manufacturing: [
            {
      logo: "/Images/marathon.png",
      quote: "Their expertise in customs regulations and manufacturing requirements has helped us avoid costly delays and keep our production schedule on track.",
      personImg: "/Images/icone-people2.png",
      role: "Supply Chain Director",
      company: "Marathon Manufacturing Corp.",
    },
    {
      logo: "/Images/airmax.png",
      quote: "Highly responsive, knowledgeable, and proactive. Their customs support has been essential in keeping our components flowing without interruption.",
      personImg: "/Images/icone-people3.png",
      role: "Operations Manager",
      company: "AirMax Industrial Group",
    },
  ],
};

// SAVE IT
localStorage.setItem("sectorTestimonials", JSON.stringify(sectorTestimonials));

console.log("All sector testimonials saved!");
