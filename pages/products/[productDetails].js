import { useRouter } from "next/router"

export default function productDetails() {
    const router = useRouter();
    function handleBack() {
        router.back()
    }
    return <div>
        <button onClick={handleBack}>Back to Product Page</button>
        <h1>ProductDetails</h1>
    </div>
}