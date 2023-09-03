import Container from "../container";
import HighlightedProductCard from "../highlightedProductCard";


export default function Highlights() {
    return (
        <Container className="bg-slate-100">
            <div className="flex flex-col justify-center items-center gap-3 py-4">
                <h1 className="text-3xl font-bold">Our Highlights</h1>
                <div className="flex justify-center items-center gap-8">
                    <HighlightedProductCard />
                    <HighlightedProductCard />
                    <HighlightedProductCard />
                </div>
            </div>
        </Container>
    )
}