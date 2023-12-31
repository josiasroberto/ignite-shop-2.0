import { Slider } from '@/components/Slider'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return (
    <>
      <Slider />
    </>
  )
}
