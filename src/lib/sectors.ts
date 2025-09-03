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
        img: "/brands/caterpillar.png",
        name: "Caterpillar",
        description:
          "Heavy-duty equipment and machinery for mining operations.",
      },
      {
        img: "/brands/komatsu.png",
        name: "Komatsu",
        description:
          "Reliable earth-moving machines and underground mining solutions.",
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
        img: "/brands/siemens.png",
        name: "Siemens",
        description:
          "Automation and control solutions for efficient manufacturing.",
      },
      {
        img: "/brands/bosch.png",
        name: "Bosch",
        description: "Precision tools and industrial solutions for factories.",
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
        img: "/brands/tetra-pak.png",
        name: "Tetra Pak",
        description: "Hygienic packaging and processing solutions.",
      },
      {
        img: "/brands/nestle.png",
        name: "Nestlé",
        description: "Food safety and quality assurance products.",
      },
    ],
    cta: {
      text: "Contact Us",
      link: "/contact",
    },
  },
];
