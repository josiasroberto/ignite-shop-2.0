import { Skeleton } from '@/components/skeleton'
import Image from 'next/image'

export default function HomeLoading() {
  return (
    <div className="relative">
      <div className="absolute right-0 z-10 flex h-card w-34 items-center justify-center bg-gradient-to-r from-background/0 to-background/100">
        <Image
          className="ml-14"
          src="/arrow-right.svg"
          alt=""
          width={48}
          height={48}
        />
      </div>

      <div className="flex gap-12 pl-[410px]">
        <div className="h-card w-card space-y-6">
          <Skeleton className="h-[600px] w-card" />
          <div className="flex justify-between">
            <Skeleton className="h-8 w-[330px]" />
            <Skeleton className="h-8 w-25" />
          </div>
        </div>

        <div className="h-card w-card space-y-6">
          <Skeleton className="h-[600px] w-[446px]" />
          <div className="flex justify-between">
            <Skeleton className="h-8 w-[330px]" />
          </div>
        </div>
      </div>
    </div>
  )
}
