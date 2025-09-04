// Used in Navbar
export const sectors = [
  {
    id: "mining",
    name: "Mining",
    description: "Explore the mining tools.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Explore the manufacturing tools.",
  },
  {
    id: "foodprocessing",
    name: "Food Processing",
    description: "Explore the food-processing tools.",
  },
];

// Used in /sectors/[sectorId]/page.tsx
export const sectorList = [
  {
    id: "mining",
    headerContent: [
      {
        url: "/mining.png",
        title: "Mining",
        statement: "Products of the mining sector",
      },
    ],
    bodyContent: [
      {
        img: "/hififlter.png",
        name: "Hi-Fi Filters",
        description: "Heavy-duty filters for prime mining operations.",
      },
      {
        img: "/hydraulicpump.jpg",
        name: "Hydraulic Pumps",
        description: "Reliable pumps for all mining solutions.",
      },
      {
        img: "/hiforcetorquesystem.png.",
        name: "Hi-Force Torque Systems",
        description: "Torque systems for all mining solutions.",
      },
    ],
    cta: {
      text: "Contact Us",
      link: "/contact",
    },
  },
  {
    id: "manufacturing",
    headerContent: [
      {
        url: "/manufacturing.png",
        title: "Manufacturing",
        statement: "Products of the manufacturing sector",
      },
    ],
    bodyContent: [
      {
        img: "/hififlter.png",
        name: "Hi-Fi Filters",
        description: "Heavy-duty filters for prime mining operations.",
      },
      {
        img: "/hydraulicpump.jpg",
        name: "Hydraulic Pumps",
        description: "Reliable pumps for all mining solutions.",
      },
      {
        img: "/hiforcetorquesystem.png.",
        name: "Hi-Force Torque Systems",
        description: "Torque systems for all mining solutions.",
      },
    ],
    cta: {
      text: "Contact Us",
      link: "/contact",
    },
  },
  {
    id: "foodprocessing",
    headerContent: [
      {
        url: "/processing.png",
        title: "Food Processing",
        statement: "Products of the food processing sector",
      },
    ],
    bodyContent: [
      {
        img: "/hififlter.png",
        name: "Hi-Fi Filters",
        description: "Heavy-duty filters for prime mining operations.",
      },
      {
        img: "/hydraulicpump.jpg",
        name: "Hydraulic Pumps",
        description: "Reliable pumps for all mining solutions.",
      },
      {
        img: "/hiforcetorquesystem.png.",
        name: "Hi-Force Torque Systems",
        description: "Torque systems for all mining solutions.",
      },
    ],
    cta: {
      text: "Contact Us",
      link: "/contact",
    },
  },
];
