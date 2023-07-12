import { useRouter } from "next/router"

export default function filteredFunction() {

    const router = useRouter();
    const { query } = router;
    const { filteredProducts } = query;
    return (
        <div>
            <p>
                Filtered Products.
                Catch all Route.
                {
                    filteredProducts && filteredProducts.length > 0 ?
                        filteredProducts.map(item => <p>{item}</p>) : null
                }
            </p>
        </div>
    )
}