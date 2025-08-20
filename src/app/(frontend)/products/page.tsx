
import Header from "@/app/ui-items/design/Header";
import Link from "next/link";


export default function Page() {
  return (
    <main className="bg-[url('/background.png')] bg-center bg-no-repeat bg-contain min-h-screen">
      <Header
        title="Products"
        statement="Vento Zambia offers a comprehensive product portfolio that meets the demands of industries and sectors. We supply Hiforce Tools, Hifi Filters, Alkitronic Tools, Sygma Instruments, Metabo Power tools, and many more."
      />
      <div className="lg:p-8 md:p-6 p-4 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-start space-y-2 px-4 max-w-4xl">
          <h2 className="font-semibold text-start text-xl lg:text-3xl md:text-2xl leading-relaxed text-neutral-950">
            Hi-Force Hydraulic Tools
          </h2>
          <p className="font-medium text-start  lg:text-md text-sm leading-relaxed text-neutral-800">
            Hi-Force is the UK&apos;s leading designer, manufacturer and supplier of hydraulic tools.
            It caters to a wide variety of industries, with a product range comprising of over 2,000 products including hydraulic cylinders, pumps, jacks, toughlift jacking systems, torque tools, bolt tensioners, hydrotest pumps, puller kits, crimpers and cutters, nut splitters, flange spreaders and other industry related products.
            Vento Zambia supplies and distributes Hi-force hydraulic tools in Zambia.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 lg:gap-8 md:gap-6 p-4">
          <div
            className="relative overflow-hidden rounded-lg shadow-lg group px-4 h-56"
          >
            <div
              className="absolute bg-[url('/hydrauliccylinder.jpg')] inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500"
            ></div>

            <div className="absolute inset-0 bg-black opacity-40  transition-opacity duration-300"></div>

            <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl sm:text-2xl font-semibold leading-tight pr-4">
                  Hydraulic Cylinders
                </h3>
              </div>
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-lg shadow-lg group px-4 h-56"
          >
            <div
              className="absolute bg-[url('/hydraulicpump.jpg')] inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500"
            ></div>

            <div className="absolute inset-0 bg-black opacity-40  transition-opacity duration-300"></div>

            <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl sm:text-2xl font-semibold leading-tight pr-4">
                  Hydraulic Pumps
                </h3>
              </div>
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-lg shadow-lg group px-4 h-56"
          >
            <div
              className="absolute bg-[url('/hififilter.jpg')] inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500"
            ></div>

            <div className="absolute inset-0 bg-black opacity-40  transition-opacity duration-300"></div>

            <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl sm:text-2xl font-semibold leading-tight pr-4">
                  Hydraulic jacks
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="flex justify-center items-center my-6">
          <Link
            href="/products/hiforce"
            className="bg-neutral-800 dark:bg-neutral-200 text-neutral-50 lg:text-xl text-md font-medium lg:px-8 lg:py-6 py-2 px-4 lg:rounded-xl rounded transition-all hover:scale-95"
          >
            HiForce Catalogue
          </Link>
        </div>
      </div>
    </main>
  );
}

