import { AiFillStar } from "react-icons/ai";
import { BsCartPlusFill } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function ProductCard() {
    return (
        <div className="w-[250px] h-[380px] rounded-3xl border-2 border-slate-100 bg-white">
            <img src="https://placehold.co/500x300" alt="product_img" className="w-full rounded-t-3xl" />
            <div className="flex flex-col items-start py-5 px-7 gap-5 mt-4">
                <h2 className="font-semibold text-base leading-6">Lorem Ipsum</h2>
                <h1 className="text-2xl font-semibold">$20.99</h1>
                <div className="w-full flex items-center justify-between">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <div className="bg-slate-900 flex items-center justify-center text-white rounded-full w-8 h-8">
                        <HiOutlineShoppingCart />
                    </div>
                </div>
            </div>
        </div>
    )
}