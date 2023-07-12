import Link from "next/link";

export default function Navbar() {
    return <div>
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: '50px' }}>
            <li style={{ fontSize: '20px' }}><Link href={'/'}>Home</Link></li>
            <li style={{ fontSize: '20px' }}><Link href={'/products'}>Product</Link></li>
            <li style={{ fontSize: '20px' }}><Link href={'/products/add'}>Add Product</Link></li>
            <li style={{ fontSize: "20px" }}><Link href={'/cart'}>Cart</Link></li>
            <li style={{ fontSize: "20px" }}><Link href={'/users'}>Users</Link></li>
        </ul>
    </div>
}