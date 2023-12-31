import { Header } from '@/components/header'

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 pb-8">
      <Header />
      {children}
    </div>
  )
}
