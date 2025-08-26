
import ServiceHeader from "@/app/ui-items/design/ServiceHeader";

export default function Page() {
  return (
    <main className="min-h-screen">
      <ServiceHeader
        title="Hiforce Hydraulic Tools"
        statement="Explore our Hiforce Tools Catalogue. Download our products catalogue and make enquiries."
        url="/tool-repair.jpg"
      />
      <div className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto lg:p-8 md:p-6 p-4 ">
          <h3 className="text-md text-gray-950"></h3>
        </div>
      </div>

    </main>
  );
}
