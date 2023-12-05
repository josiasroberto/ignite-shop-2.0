import { Header } from '@/components/header'

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto px-34 w-full max-w-[1600px] flex flex-col gap-8">
      <Header />
      {children}
    </div>
  )
}
