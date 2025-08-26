export const products = [
  {
    id: "hiforce",
    name: "Hiforce Tools",
    description: "More on Hiforce Tools",
  },
  {
    id: "hififilter",
    name: "Hifi Filter",
    description: "More on Hififilter Tools",
  },
  {
    id: "egamaster",
    name: "Ega Master",
    description: "More on Egamaster Tools",
  },
  {
    id: "alkitronic",
    name: "Alkitronic",
    description: "More on Alkitronic Tools",
  },
];

//add the text: we supply {headerContent.title} in Zambia.

export const productList = [
  {
    id:"hiforce", //this is the productId to be used as a link for /products/[productId]/page.tsx
    headerContent: [
      {
        url:"/image.jpg",
        title:"Hiforce Hydraulic Tools",
        statement:"Hi-Force is the leading designer, manufacturer and supplier of hydraulic tools. The product range comprises of over 2,000 products including hydraulic cylinders, pumps, jacks, toughlift jacking systems, torque tools, bolt tensioners, hydrotest pumps, puller kits, crimpers and cutters, nut splitters, flange spreaders and other industry related products.",
      }
    ],
    bodyContent: [
      {}
    ]
  }
]