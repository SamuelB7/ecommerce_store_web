import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

export default function Header() {
    return (
        <div className="w-full flex justify-between items-center px-40 py-5">
            <div className="flex items-center gap-8">
                <div className="flex w-32 h-14 py-4 px-6 justify-center items-center gap-3 rounded-[90px] bg-slate-200">
                    <h1>LOGO</h1>
                </div>
                <div className="w-1 h-10 rounded-sm bg-slate-200"></div>
                <Link href="#" className="text-center text-slate-500 text-sm font-bold">
                    Home
                </Link>
                <Link href="#" className="text-center text-slate-500 text-sm font-bold">
                    Discover
                </Link>
                <Link href="#" className="text-center text-slate-500 text-sm font-bold">
                    Blog
                </Link>
                <Link href="#" className="text-center text-slate-500 text-sm font-bold">
                    About Us
                </Link>
                <Link href="#" className="text-center text-slate-500 text-sm font-bold">
                    Contact
                </Link>
            </div>
            <div className="flex items-center justify-center gap-8">
                <AiOutlineUser />
                <AiOutlineShoppingCart />
            </div>
        </div>
    )
}