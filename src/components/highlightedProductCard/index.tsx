

export default function HighlightedProductCard() {
    return (
        <div className="max-sm:w-full w-[350px] h-[450px] rounded-3xl border-2 border-slate-100 bg-white">
            <img src="https://placehold.co/500x300" alt="product_img" className="w-full rounded-t-3xl" />
            <div className="flex flex-col items-start py-5 px-7 gap-5 mt-4">
                <div className="flex items-start justify-center gap-6">
                    <div className="flex flex-col">
                        <h1 className="font-medium text-base leading-6">
                            Neque volutpat morbi.
                        </h1>
                        <p className="font-normal text-sm">
                            Et blandit non sit ac egestas risus non.
                        </p>
                    </div>
                    <div className="flex items-center justify-center p-2 border-2 rounded-md border-black w-8 h-8">
                        <p>$20</p>
                    </div>
                </div>
                <button className="w-36 flex items-center justify-center bg-black rounded-[90px] text-white font-bold text-base px-4 py-3">
                    Order Now
                </button>
            </div>
        </div>
    )
}