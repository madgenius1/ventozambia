import {  Factory, Lightbulb, Wrench } from 'lucide-react';


const services = [
  {
    title: "Supply & Procurement",
    description: "We source and supply a wide range of high-quality industrial components from global manufacturers, ensuring you get the exact part you need.",
    icon: <Factory size={40} className="text-neutral-500" />
  },
  {
    title: "On-Site Service",
    description: "Our certified technicians provide professional installation, maintenance, and repair services directly at your facility to minimize downtime.",
    icon: <Wrench size={40} className="text-neutral-500" />
  },
  {
    title: "Technical Consulting",
    description: "We offer expert advice to help you select the right components and optimize your processes for efficiency and safety.",
    icon: <Lightbulb size={40} className="text-neutral-500" />
  },
];

export default function OurServices() {
  return (
    <section className="bg-neutral-200 py-16 lg:py-24">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-12">What We Do</h2>
      <div className="mt-12 grid gap-12 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="bg-neutral-50 p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center justify-center mb-6">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">{service.title}</h3>
            <p className="text-neutral-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}
