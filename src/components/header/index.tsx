"use client"
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import Container from "../container";
import SearchBar from "../searchBar";

export default function Header() {
    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <Container>
            <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-8">
                    <div className="flex w-32 h-14 py-4 px-6 justify-center items-center gap-3 rounded-[90px] bg-slate-200">
                        <h1>LOGO</h1>
                    </div>
                    <div className="hidden md:flex items-center justify-center gap-8">
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
                        <SearchBar />
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-center gap-8">
                        <AiOutlineUser />
                        <AiOutlineShoppingCart />
                        <div onClick={handleMenu} className="md:hidden">
                            <AiOutlineMenu size={25} />
                        </div>
                    </div>

                    <div className={menu ? 'md:hidden fixed right-0 top-0 w-full h-screen bg-white' : ''}>
                        <div className={
                            menu ? 'fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-100 p-10 ease-in duration-500'
                                : 'fixed right-[-100%] top-0 p-10 ease-in duration-500'
                        }>
                            <div>
                                <div className='flex w-full items-center justify-between'>
                                    <h2>LOGO</h2>
                                    <div onClick={handleMenu} className='rounded-full border border-black cursor-pointer'>
                                        <AiOutlineClose />
                                    </div>
                                </div>
                                <div className='py-4 flex flex-col'>
                                    <ul>
                                        <Link href='#' scroll={false}>
                                            <li className='py-4 text-sm text-slate-500 font-bold'>Home</li>
                                        </Link>
                                        <Link href='#' scroll={false}>
                                            <li className='py-4 text-sm text-slate-500 font-bold'>Discover</li>
                                        </Link>
                                        <Link href='#' scroll={false}>
                                            <li className='py-4 text-sm text-slate-500 font-bold'>Blog</li>
                                        </Link>
                                        <Link href='#' scroll={false}>
                                            <li className='py-4 text-sm text-slate-500 font-bold'>About Us</li>
                                        </Link>
                                        <Link href='#' scroll={false}>
                                            <li className='py-4 text-sm text-slate-500 font-bold'>Contact</li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}