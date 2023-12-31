import Image from 'next/image'
import Link from 'next/link'
import { CartWidget } from './cart-widget'

export function Header() {
  return (
    <div className="px-34 flex justify-between items-center mt-10 mb-8 gap-8">
      <Link href="/">
        <Image src="/logo.svg" width={129} height={52} quality={100} alt="" />
      </Link>

      <CartWidget />
    </div>
  )
}
