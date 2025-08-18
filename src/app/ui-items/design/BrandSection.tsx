import ProductCard from './ProductCard';

export default function BrandSection({ industryTitle, brands }) {
    return (
        <section className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-4 py-4">
            <div className="w-full lg:w-auto px-4">
                <h2 className="text-2xl font-medium uppercase text-neutral-800 dark:text-neutral-200">
                    {industryTitle}
                </h2>
            </div>
            <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center sm:justify-items-end">
                    {brands.map((brand, index) => (
                        <ProductCard key={index} title={brand.title} imageUrl={brand.imageUrl} />
                    ))}
                </div>
            </div>
        </section>
    );
}