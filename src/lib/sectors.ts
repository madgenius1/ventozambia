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
  },
];
