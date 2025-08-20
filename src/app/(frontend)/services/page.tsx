
import Header from "@/app/ui-items/design/Header";
import { servicesComponent } from "@/lib/services"
import { MoveRight } from "lucide-react";
import Link from "next/link"

export default function Page() {
  return (
    <main className="bg-[url('/background.png')] bg-center bg-no-repeat bg-contain min-h-screen">
      <Header
        title="Services"
        statement="Vento Zambia offers a comprehensive services portfolio that meets the demands of industries and sectors. We provide tool rental, repair and maintenance, calibration, installation and training."
      />
      <div className="lg:p-8 md:p-6 p-4 max-w-screen-xl mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {servicesComponent.map((area, index) => (
            <Link
              href={`/services/${area.serviceId}`}
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group px-4 h-64"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${area.image})` }}
              ></div>

              <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-60 transition-opacity duration-300"></div>

              <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl sm:text-2xl font-semibold leading-tight pr-4">
                    {area.title}
                  </h3>
                  <MoveRight className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                <p className="text-sm sm:text-base leading-relaxed opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-32 pb-2">
                  {area.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center my-6">
          <Link
            href="/contact"
            className="bg-neutral-800 dark:bg-neutral-200 text-neutral-50 lg:text-xl text-md font-medium lg:px-8 lg:py-6 py-2 px-4 lg:rounded-xl rounded transition-all hover:scale-95"
          >
            Contact Us
          </Link>
        </div>
      </div>

    </main>
  );
}
