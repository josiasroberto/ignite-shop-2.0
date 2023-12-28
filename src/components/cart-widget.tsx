'use client'

import { Handbag } from '@phosphor-icons/react'

export function CartWidget() {
  const isCartEmpty = false

  return (
    <>
      {isCartEmpty ? (
        <button
          type="button"
          className="rounded-md bg-elements p-3 transition hover:opacity-75"
        >
          <Handbag size={24} weight="bold" className="text-icon" />
        </button>
      ) : (
        <button
          type="button"
          className="relative rounded-md bg-elements p-3 transition hover:opacity-75"
        >
          <div className="absolute right-[-9px] top-[-9px] flex h-7 w-7 flex-col items-center justify-center gap-2 rounded-full border-4 border-background bg-principal text-sm font-bold leading-[160%] text-white">
            1
          </div>
          <Handbag size={24} weight="bold" />
        </button>
      )}
    </>
  )
}
