

export default function Hero() {
    return (
        <div className="max-sm:flex-col max-sm:px-10 max-sm:gap-4 w-full h-[720px] bg-slate-100 flex justify-center items-center gap-[190px] px-40 py-5">
            <div className="flex flex-col gap-8 text-start">
                <h1 className="max-sm:text-5xl text-8xl font-bold tracking-tighter">
                    Bibendum et sit aliquam!
                </h1>
                <p className="text-base font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.
                </p>
                <div className="max-sm:flex max-sm:justify-center">
                    <button className="flex justify-center items-center px-6 py-4 bg-black rounded-[90px] text-white w-48">
                        Lorem Ipsum
                    </button>
                </div>
            </div>
            <img src="https://placehold.co/500x300" alt="product_img" />
        </div>
    )
}