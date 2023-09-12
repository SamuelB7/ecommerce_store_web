import { AiFillStar } from "react-icons/ai";
import { BsCartPlusFill } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";

type ProductCardProps = {
    name: string;
    price: number;
    photo: string;
    //rating: number;
}

export default function ProductCard({ name, price, photo }: ProductCardProps) {
    return (
        <div className="w-[250px] max-h-[380px] rounded-3xl border-2 border-slate-100 bg-white">
            <img src={photo} alt="product_img" className="w-full rounded-t-3xl" />
            <div className="flex flex-col items-start justify-between py-5 px-7 gap-2">
                <h2 className="font-semibold text-base leading-6">{name}</h2>
                <h1 className="text-2xl font-semibold">{price}</h1>
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