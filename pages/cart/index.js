
import { getListOfCartItems } from "@/utils";
import { useRouter, withRouter } from "next/router"
import { Component } from "react";


const cartItems = [
    {
        id: '1',
        label: 'Cart Item 1'
    },
    {
        id: '2',
        label: 'Cart Item 2'
    },
    {
        id: '3',
        label: 'Cart Item 3'
    },
]
export async function getServerSideProps() {
    const cartItemsListData = await getListOfCartItems();
    return {
        props: {
            cartItemsListData
        }
    }
}

function cart(props) {
    const { router } = props;
    console.log(props)
    const { cartItemsListData } = props;
    console.log(cartItemsListData)
    function handleNavigateToCartDetails(id) {
        router.push(`/cart/${id}`)
    }
    function handleNavigateToHomepage() {
        router.push('/');
    }
    return <div style={{ margin: '50px' }}>
        <h1>Cart</h1>
        <div>
            <button onClick={handleNavigateToHomepage}>Go to Homepage</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: '25px', marginTop: '30px' }}>
            {

                cartItemsListData.map(item => (
                    <div onClick={() => router.push(`/cart/${item.id}`)} style={{ display: "flex", flexDirection: "column", gap: '25px', marginTop: '30px', border: '1px solid', padding: '5px', cursor: "pointer" }} key={item.id}>
                        <p>Total: {item.total}</p>
                        <p>Total Products: {item.totalProducts}</p>
                        <p>Total Quantity: {item.totalQuantity}</p>
                        <p>Products: </p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {
                                item.products && item.products.length > 0 ? item.products.map(productItem =>
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
                ))
            }
        </div>
    </div>
}

export default withRouter(cart);


//class based components


// class cart extends Component {
//     handleNavigateToCartDetails = (id) => {
//         this.props.router.push(`/cart/${id}`)
//     }
//     handleNavigateToHomepage = () => {
//         this.props.router.push('/');
//     }
//     render() {
//         return (
//             <div style={{ margin: '50px' }}>
//                 <h1>Cart</h1>
//                 <div>
//                     <button onClick={this.handleNavigateToHomepage}>Go to Homepage</button>
//                 </div>
//                 <div style={{ display: "flex", flexDirection: "column", gap: '25px', marginTop: '30px' }}>
//                     {
//                         cartItems.map(item => <div style={{ padding: '10px', border: '1px solid' }} key={item.id}>
//                             <p>{item.label}</p>
//                             <button style={{ border: '1px solid', padding: '5px', background: 'white', color: 'black', marginTop: '10px' }} onClick={() => this.handleNavigateToCartDetails(item.id)}>Navigate to Details Page</button>
//                         </div>)
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

// export default withRouter(cart);