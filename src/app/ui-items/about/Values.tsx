import { CheckCircle2, Handshake, Wrench } from 'lucide-react';


export default function Values() {
  return (
    <section className="bg-neutral-200 py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">Our Core Values</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-neutral-100 p-8 rounded-2xl shadow-lg">
            <CheckCircle2 size={48} className="text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-neutral-900 mb-2">Integrity</h3>
            <p className="text-neutral-600 leading-relaxed">
              We conduct business with the highest ethical standards, ensuring honesty and transparency in all our dealings.
            </p>
          </div>
          <div className="bg-neutral-100 p-8 rounded-2xl shadow-lg">
            <Handshake size={48} className="text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-neutral-900 mb-2">Reliability</h3>
            <p className="text-neutral-600 leading-relaxed">
              Our customers count on us to deliver the right components on time, every time. We are a partner they can trust.
            </p>
          </div>
          <div className="bg-neutral-100 p-8 rounded-2xl shadow-lg">
            <Wrench size={48} className="text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-neutral-900 mb-2">Expertise</h3>
            <p className="text-neutral-600 leading-relaxed">
              Our team&apos;s deep technical knowledge ensures we provide superior solutions and support for complex industrial challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
