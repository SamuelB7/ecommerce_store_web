import { getServerPageFindOneProduct } from "@/graphql/generated/page";

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
        <p>PRODUCT DETAIL {product.name}</p>
    )
}