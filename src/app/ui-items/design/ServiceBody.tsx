
interface ServiceContentSection {
    title: string;
    body: string;
}

interface ServiceBodyProps {
    contentSections: ServiceContentSection[];
}

export default function ServiceBody({ contentSections }: ServiceBodyProps) {
    return (
        <div className="container mx-auto px-4 py-12 lg:py-24">
            {contentSections.map((section, index) => (
                <div key={index} className="mb-10 last:mb-0">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        {section.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        {section.body}
                    </p>
                </div>
            ))}
        </div>
    );
}
