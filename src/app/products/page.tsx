import Container from "@/components/container";
import { Product } from "@/graphql/generated/graphql";
import { getServerPageFindAllProducts, ssrFindAllProducts } from "@/graphql/generated/page"

async function getProducts() {
    const { props } = await getServerPageFindAllProducts({
        variables: {
            limit: 10,
            offset: 0,
        }
    });
    return props.data.findAllProducts;
}

export default async function Products() {
    const products = await getProducts();
    return (
        <Container>
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <h1>{product.name}</h1>
                        {/* <h2>{product.price}</h2>
                        <h3>{product.category}</h3> */}
                    </div>
                )
            })}
        </Container>
    )
}