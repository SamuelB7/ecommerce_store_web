import Container from "@/components/container";
import ProductCard from "@/components/productCard";
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
            <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-auto gap-8">
                {products.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            photo={product.photos[0].url}
                        />
                    )
                })}
            </div>
        </Container>
    )
}