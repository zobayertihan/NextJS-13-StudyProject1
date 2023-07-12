import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// const dummyProductsData = [
//     {
//         id: '1',
//         label: 'Cart Item 1'
//     },
//     {
//         id: '2',
//         label: 'Cart Item 2'
//     },
//     {
//         id: '3',
//         label: 'Cart Item 3'
//     },
// ]

// export async function getStaticProps() {

//     return {
//         props: {
//             productsData: dummyProductsData
//         }
//     }
// }


export default function products(props) {
    // console.log(props);
    const router = useRouter();
    const { productsData } = props;
    // console.log(productsData);

    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(false)
    useEffect(() => {

        setLoader(true);

        async function getListOfProducts() {
            const apiResponse = await fetch('https://dummyjson.com/products')
            const result = await apiResponse.json()

            if (result && result.products && result.products.length > 0) {
                setProducts(result.products);
                setLoader(false);
            }
        }
        getListOfProducts();

    }, [])
    console.log(products)

    if (loader) {
        return <h1 style={{ display: 'flex', justifyContent: 'center', fontSize: '50px' }}>Loading</h1>
    }


    return <div style={{ margin: '50px' }}>
        <h1 style={{ fontSize: '30px', marginBottom: '20px' }}>Product Page</h1>

        {/* {
            productsData && productsData.length > 0 ? productsData.map(item =>
                <div key={item.id}>
                    <p>
                        <Link href={`/products/${item.id}`}>{item.label}</Link>
                    </p>
                </div>) : null
        } */}
        {/* <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div><p><Link href={'/products/1'}>product 1</Link></p></div>
            <div><p><Link href={'/products/2'}>product 2</Link></p></div>
            <div><p><Link href={'/products/3'}>product 3</Link></p></div>
        </div> */}

        <div style={{ display: "flex", flexDirection: "column", gap: '10px' }}>
            {
                products && products.length > 0 ? products.map(product => <div
                    style={{ border: '1px solid' }}
                    key={product.id}>
                    <img src={product.thumbnail} alt="" />
                    <p>Product: {product.title}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Category: {product.category}</p>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Stock: {product.stock}</p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <p>Images: </p>
                        {
                            product.images.map((image, index) =>
                                <div key={index}>
                                    <img src={image} alt="" />
                                </div>)
                        }
                    </div>
                </div>) : null
            }
        </div>
        <button style={{ marginTop: '20px', }} onClick={() => router.back()}>Back to Home Page</button>
    </div >
}