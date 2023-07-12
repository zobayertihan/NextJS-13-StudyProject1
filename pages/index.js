import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  function handleNavigateToProduct() {
    router.push('/products');
  }

  function handleNavigateToCart() {
    router.push('/cart');
  }

  return (
    <div style={{ margin: '50px' }}>
      <h1>Hello World</h1>
      <div style={{ display: 'flex', gap: '20px', margin: '50px' }}>
        <button onClick={handleNavigateToProduct}>Product</button>
        <button onClick={handleNavigateToCart}>Cart</button>
      </div>
    </div>
  )
}