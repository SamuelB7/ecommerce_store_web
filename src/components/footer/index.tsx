import Container from "../container";


export default function Footer() {
    return (
        <Container className="bg-slate-300 h-[400px]">
            <h1 className="font-bold text-slate-900 text-2xl leading-6">E-COMMERCE</h1>
            <div className="max-sm:gap-1 flex flex-col gap-8 justify-center items-center h-full">
                <div className="max-sm:grid max-sm:grid-cols-2 max-sm:gap-1 max-sm:p-4 w-full flex gap-20">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-slate-800 font-semibold text-lg leading-6">Contact Us</h2>
                        <p className="text-slate-700 font-normal text-base leading-6">Lorem Ipsum</p>
                        <p className="text-slate-700 font-normal text-base leading-6">Lorem Ipsum</p>
                        <p className="text-slate-700 font-normal text-base leading-6">Lorem Ipsum</p>
                        <p className="text-slate-700 font-normal text-base leading-6">Lorem Ipsum</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-slate-800 font-semibold text-lg leading-6">Products</h2>
                        <p className="text-slate-700 font-normal text-base leading-6">Lorem Ipsum</p>
                        <p className="text-slate-700 font-normal text-base leading-6">Lorem Ipsum</p>
                        <p className="text-slate-700 font-normal text-base leading-6">Lorem Ipsum</p>
                        <p className="text-slate-700 font-normal text-base leading-6">Lorem Ipsum</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="text-slate-800 font-semibold text-lg leading-6">About</h2>
                        <p className="text-slate-700 font-normal text-base leading-6">Lorem Ipsum</p>
                        <p className="text-slate-700 font-normal text-base leading-6">Lorem Ipsum</p>
                        <p className="text-slate-700 font-normal text-base leading-6">Lorem Ipsum</p>
                        <p className="text-slate-700 font-normal text-base leading-6">Lorem Ipsum</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}