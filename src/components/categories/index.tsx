import Image from "next/image";
import Container from "../container";
import Smartphone from "/public/icons/cell-phone.png"
import Notebook from "/public/icons/laptop.png"
import Audio from "/public/icons/headphone-symbol.png"
import Computer from "/public/icons/computer.png"
import Tablet from "/public/icons/tablet.png"
import Link from "next/link";

export default function Categories() {
    return (
        <Container>
            <div className="flex flex-col justify-center items-center gap-5 py-4">
                <h1 className="text-3xl font-bold">Search by category</h1>
                <div className="flex justify-center items-center gap-8">
                    <div className="flex flex-col gap-3 items-center justify-center">
                        <div className="border-2 border-slate-900 rounded-full p-5">
                            <Link href={"#"}>
                                <Image src={Smartphone} alt="Smartphones" width={50} height={50} />
                            </Link>
                        </div>
                        <h2 className="text-base font-semibold">Smartphones</h2>
                    </div>

                    <div className="flex flex-col gap-3 items-center justify-center">
                        <div className="border-2 border-slate-900 rounded-full p-5">
                            <Link href={"#"}>
                                <Image src={Notebook} alt="Notebooks" width={50} height={50} />
                            </Link>
                        </div>
                        <h2 className="text-base font-semibold">Notebooks</h2>
                    </div>

                    <div className="flex flex-col gap-3 items-center justify-center">
                        <div className="border-2 border-slate-900 rounded-full p-5">
                            <Link href={"#"}>
                                <Image src={Audio} alt="Audio" width={50} height={50} />
                            </Link>
                        </div>
                        <h2 className="text-base font-semibold">Audio</h2>
                    </div>

                    <div className="flex flex-col gap-3 items-center justify-center">
                        <div className="border-2 border-slate-900 rounded-full p-5">
                            <Link href={"#"}>
                                <Image src={Computer} alt="Computer" width={50} height={50} />
                            </Link>
                        </div>
                        <h2 className="text-base font-semibold">PC</h2>
                    </div>

                    <div className="flex flex-col gap-3 items-center justify-center">
                        <div className="border-2 border-slate-900 rounded-full p-5">
                            <Link href={"#"}>
                                <Image src={Tablet} alt="Tablet" width={50} height={50} />
                            </Link>
                        </div>
                        <h2 className="text-base font-semibold">Tablets</h2>
                    </div>
                </div>
            </div>
        </Container>
    )
}