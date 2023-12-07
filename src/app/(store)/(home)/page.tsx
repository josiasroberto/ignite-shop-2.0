import { AddToCartButton } from '@/components/add-to-cart-button'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <Link
      href="/"
      className="group w-[920px] h-[920px] bg-gradient-to-b from-[#1ea483] to-[#7465d4] rounded-lg relative overflow-hidden flex items-center justify-center"
    >
      <Image
        className="object-cover"
        src="/camisetas/1.png"
        width={920}
        height={920}
        quality={100}
        alt=""
      />

      <footer className="absolute bottom-1 left-1 right-1 p-8 rounded-md flex items-center justify-between bg-bg-footer-card translate-y-32 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
        <div className="flex flex-col">
          <strong className="text-xl text-title leading-[160%]">
            Camiseta Beyond the Limits
          </strong>
          <span className="text-2xl font-bold leading-[140%] text-light">
            R$ 79,90
          </span>
        </div>
        <AddToCartButton />
      </footer>
    </Link>
  )
}
