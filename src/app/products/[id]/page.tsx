import Container from "@/components/container";
import { getServerPageFindOneProduct } from "@/graphql/generated/page";
import { AiFillStar } from "react-icons/ai";

async function getProduct(id: string) {
    const { props } = await getServerPageFindOneProduct({
        variables: {
            findOneProductId: id
        }
    })

    return props.data.findOneProduct;
}

export default async function ProductDetail({ params }: { params: { id: string } }) {
    const product = await getProduct(params.id);

    return (
        <Container>
            <div className="flex items-center justify-center gap-20">
                {product.photos ? (
                    <img src={product.photos[0].url} alt={product.name} />
                ) :
                    <img src="https://placehold.co/500x300" alt="product_img" />
                }
                <div className="flex flex-col items-start justify-center gap-10">
                    <h1 className="text-slate-900 text-3xl font-bold ">{product.name}</h1>
                    <h2>{product.price}</h2>
                    <div className="flex flex-col items-center justify-start gap-8">
                        <p className="text-slate-500">{product.description}</p>
                        <div className="flex items-center justify-start gap-8 w-full">
                            <div className="flex items-center justify-start gap-4">
                                <AiFillStar />
                                <p className="text-slate-900">{product.averageRating}</p>
                            </div>
                            <p>{product.category}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}