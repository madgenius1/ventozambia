

import Image from "next/image";

const productArray = [
  {
    imageUrl: "/hydraulicpump.jpg",
    itemName: "Hydraulic Jacklift",
    itemDescription: "The extensive range of Hi-Force hydraulic cylinders includes a wide choice of options related to capacity, stroke length, single or double acting operation, steel or aluminium construction, hollow piston centre hole and mechanical failsafe lock ring designs. All models are 700 bar maximum working pressure and capacities range from 4.5 tonnes to 1012 tonnes, with special design cylinders also available on request."
  },
  {
    imageUrl: "/hydraulicpump.jpg",
    itemName: "Hydraulic Pumps",
    itemDescription: "The extensive range of Hi-Force hydraulic cylinders includes a wide choice of options related to capacity, stroke length, single or double acting operation, steel or aluminium construction, hollow piston centre hole and mechanical failsafe lock ring designs. All models are 700 bar maximum working pressure and capacities range from 4.5 tonnes to 1012 tonnes, with special design cylinders also available on request."
  },
  {
    imageUrl: "/hydraulicpump.jpg",
    itemName: "Toughlift Jacklift",
    itemDescription: "The extensive range of Hi-Force hydraulic cylinders includes a wide choice of options related to capacity, stroke length, single or double acting operation, steel or aluminium construction, hollow piston centre hole and mechanical failsafe lock ring designs. All models are 700 bar maximum working pressure and capacities range from 4.5 tonnes to 1012 tonnes, with special design cylinders also available on request."
  },
  {
    imageUrl: "/hydraulicpump.jpg",
    itemName: "Torque Lifts",
    itemDescription: "The extensive range of Hi-Force hydraulic cylinders includes a wide choice of options related to capacity, stroke length, single or double acting operation, steel or aluminium construction, hollow piston centre hole and mechanical failsafe lock ring designs. All models are 700 bar maximum working pressure and capacities range from 4.5 tonnes to 1012 tonnes, with special design cylinders also available on request."
  },
  {
    imageUrl: "/hydraulicpump.jpg",
    itemName: "Hydrotest Pumps",
    itemDescription: "The extensive range of Hi-Force hydraulic cylinders includes a wide choice of options related to capacity, stroke length, single or double acting operation, steel or aluminium construction, hollow piston centre hole and mechanical failsafe lock ring designs. All models are 700 bar maximum working pressure and capacities range from 4.5 tonnes to 1012 tonnes, with special design cylinders also available on request."
  },
  {
    imageUrl: "/hydraulicpump.jpg",
    itemName: "Hydraulic Puller Kits",
    itemDescription: "The extensive range of Hi-Force hydraulic cylinders includes a wide choice of options related to capacity, stroke length, single or double acting operation, steel or aluminium construction, hollow piston centre hole and mechanical failsafe lock ring designs. All models are 700 bar maximum working pressure and capacities range from 4.5 tonnes to 1012 tonnes, with special design cylinders also available on request."
  },
]

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Header Component */}
      <div className="relative lg:h-64 h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
          style={{ backgroundImage: `url(/tool-repair.jpg)` }}
        >      {/* the background div should be this way: style={{ backgroundImage: `url(${url})` }} */}
        </div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
          <div className="max-w-3xl space-y-4">
            {/* {title} goes into the h1 element */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
              Hiforce Hydraulic Tools
            </h1>
            {/* {statement} goes into the p element */}
            <p className="text-white text-lg sm:text-xl font-medium leading-relaxed">
              Explore our Hiforce Tools Catalogue. Download our products catalogue and make enquiries.
            </p>
          </div>
        </div>
      </div>
      {/* Body Component */}
      <div className="lg:p-8 md:p-6 p-4">
        <div className="flex items-center justify-center py-4">
          {/* Product Name's Catalogue */}
          <h2 className="text-lg lg:text-2xl font-semibold leading-relaxed text-center">
            Vento Zambia&apos;s Hiforce Tools Catalogue
          </h2>
        </div>
        {/* Specific Product Array that includes the image, the item name, and the description */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 lg:gap-10 md:gap-8 sm:gap-6 gap-4">
          {productArray.map((product, index) =>
            <div key={index} className="flex flex-col space-y-2 gap-y-2 py-2">
              <Image
                src={product.imageUrl}
                alt={product.itemName}
                width={360}
                height={240}
                className="rounded-lg object-center"
              />
              <h3 className="text-md font-medium text-gray-950 lg:text-lg">
                {product.itemName}
              </h3>
              <p className="leading-relaxed text-md text-gray-800">
                {product.itemDescription}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
