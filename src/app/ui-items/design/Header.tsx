
interface HeaderProps {
    title: string;
    statement: string
}

const Header = ({ title, statement }: HeaderProps) => (
    <div className="lg:p-8 md:p-6 p-4 bg-[#C90A10]">
        <div className="my-6 flex justify-center flex-col items-center text-center space-y-4 gap-y-2">
            <h2 className="text-[#FEFEFF] font-bold lg:text-5xl md:text-3xl sm:text-3xl text-2xl">
                {title}
            </h2>
            <p className="text-white lg:text-lg text-md font-medium lg:leading-relaxed leading-snug max-w-3xl">
                {statement}
            </p>
        </div>
    </div>
)

export default Header;