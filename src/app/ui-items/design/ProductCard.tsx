import Image from "next/image";

export default function ProductCard({ title, imageUrl }) {
    return (
        <div className="relative h-48 w-48 sm:h-48 sm:w-48 rounded-md overflow-hidden shadow-md">
            <Image
                src={imageUrl}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="opacity-70"
            />
            <div className="absolute inset-0 bg-neutral-600/50 flex items-end p-4">
                <h3 className="text-xl uppercase text-white font-bold">{title}</h3>
            </div>
        </div>
    );
}