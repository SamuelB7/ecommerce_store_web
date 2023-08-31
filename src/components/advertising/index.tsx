

export default function Advertising() {
    return (
        <div className="max-sm:flex-col-reverse max-sm:px-10 max-sm:gap-4 w-full h-[600px] bg-white flex justify-center items-center gap-[190px] px-40 py-5">
            <img src="https://placehold.co/500x300" alt="product_img" />
            <div className="flex flex-col gap-8 text-start">
                <h1 className="max-sm:text-5xl text-6xl font-bold tracking-tighter">
                    Nibh in dolor bibendum.
                </h1>
                <p className="text-base font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.
                </p>
            </div>
        </div>
    )
}