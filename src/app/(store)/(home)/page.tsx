import { Slider } from '@/components/Slider'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <>
      <Slider />
    </>
  )
}
