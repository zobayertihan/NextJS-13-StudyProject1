import { getCartDetailsById } from "@/utils";
import { useRouter } from "next/router"

export async function getServerSideProps(context) {
    const { query } = context;
    const { cartDetails } = query;
    const cartItemsDetails = await getCartDetailsById(cartDetails)
    return {
        props: {
            cartItemsDetails
        }
    }
}
export default function cartDetails(props) {
    const router = useRouter();
    // const page = router.query.cartDetails;
    console.log(props)
    const { query } = router;
    const { cartDetails } = query;
    const { cartItemsDetails } = props;
    return (
        <div>
            <h1>Cart Details </h1>
            {/* - {page} */}

            <p>This is the details page for the item number - {cartDetails}</p>

            <div style={{ display: "flex", flexDirection: "column", gap: '25px', marginTop: '30px', border: '1px solid', padding: '5px', cursor: "pointer" }} key={cartItemsDetails.id}>
                <p>Total: {cartItemsDetails.total}</p>
                <p>Total Products: {cartItemsDetails.totalProducts}</p>
                <p>Total Quantity: {cartItemsDetails.totalQuantity}</p>
                <p>Products: </p>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {
                        cartItemsDetails.products && cartItemsDetails.products.length > 0 ? cartItemsDetails.products.map(productItem =>
                            <div style={{ border: '1px solid', display: "flex", flexDirection: "column", gap: '10px', padding: '5px' }} key={productItem.id}>
                                <p>Title: {productItem.title}</p>
                                <p>Price: {productItem.price}</p>
                                <p>Quantity: {productItem.quantity}</p>
                                <p>Total: {productItem.total}</p>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}