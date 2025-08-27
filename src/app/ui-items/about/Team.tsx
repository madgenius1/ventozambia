
import Link from "next/link";

const teamMembers = [
  {
    name: "Paul Nsongo",
    role: "Founder & CEO",
    bio: "With over 20 years of experience in industrial procurement, Paul founded Vento Zambia to streamline the supply chain for key industries.",
    image: "https://placehold.co/400x400/D4D4D8/52525B?text=Paul",
    email: "paul.m@ventozambia.com",
    phone: "+260 968 539 231"
  },
  {
    name: "Jane Banda",
    role: "Head of Operations",
    bio: "Jane ensures every order is processed efficiently and delivered on time, managing our logistics with precision and care.",
    image: "https://placehold.co/400x400/D4D4D8/52525B?text=Jane",
    email: "jane.b@ventozambia.com",
    phone: "+260 968 539 232"
  },
  {
    name: "David Phiri",
    role: "Lead Technical Engineer",
    bio: "A certified expert in industrial machinery, David leads our service team, providing top-tier maintenance and technical support.",
    image: "https://placehold.co/400x400/D4D4D8/52525B?text=David",
    email: "david.p@ventozambia.com",
    phone: "+260 968 539 233"
  },
  {
    name: "Jane Banda",
    role: "Head of Operations",
    bio: "Jane ensures every order is processed efficiently and delivered on time, managing our logistics with precision and care.",
    image: "https://placehold.co/400x400/D4D4D8/52525B?text=Jane",
    email: "jane.b@ventozambia.com",
    phone: "+260 968 539 232"
  },
  {
    name: "David Phiri",
    role: "Lead Technical Engineer",
    bio: "A certified expert in industrial machinery, David leads our service team, providing top-tier maintenance and technical support.",
    image: "https://placehold.co/400x400/D4D4D8/52525B?text=David",
    email: "david.p@ventozambia.com",
    phone: "+260 968 539 233"
  },
  {
    name: "Jane Banda",
    role: "Head of Operations",
    bio: "Jane ensures every order is processed efficiently and delivered on time, managing our logistics with precision and care.",
    image: "https://placehold.co/400x400/D4D4D8/52525B?text=Jane",
    email: "jane.b@ventozambia.com",
    phone: "+260 968 539 232"
  },
  {
    name: "David Phiri",
    role: "Lead Technical Engineer",
    bio: "A certified expert in industrial machinery, David leads our service team, providing top-tier maintenance and technical support.",
    image: "https://placehold.co/400x400/D4D4D8/52525B?text=David",
    email: "david.p@ventozambia.com",
    phone: "+260 968 539 233"
  },
];

export default function Team() {
  return (
    <section className="bg-neutral-100 py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-12">Meet Our Team</h2>
        <div className="grid gap-12 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-neutral-50 p-6 rounded-2xl shadow-lg">
              <img
                src={member.image}
                alt={`Photo of ${member.name}`}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-6 object-cover object-center border-4 border-neutral-300"
              />
              <h3 className="text-2xl font-semibold text-neutral-900">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-4">{member.role}</p>
              <p className="text-neutral-600 leading-relaxed">{member.bio}</p>
              <div className="flex flex-col gap-2 mt-4">
                <Link href={`mailto:${member.email}`} className="text-sm text-neutral-600 hover:underline hover:text-blue-700">
                  {member.email}
                </Link>
                <Link href={`tel:${member.phone}`} className="text-sm text-neutral-600 hover:underline hover:text-blue-700">
                  {member.phone}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
