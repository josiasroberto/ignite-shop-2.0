'use client'

import { Handbag } from '@phosphor-icons/react'

export function CartWidget() {
  const isCartEmpty = false

  return (
    <>
      {isCartEmpty ? (
        <button type="button" className="bg-elements p-3 rounded-md">
          <Handbag size={24} weight="bold" className="text-icon" />
        </button>
      ) : (
        <button type="button" className="bg-elements p-3 rounded-md relative">
          <div className="text-sm font-bold leading-[160%] text-white bg-principal border-4 border-background w-7 h-7 flex flex-col justify-center items-center gap-2 rounded-full absolute right-[-9px] top-[-9px]">
            1
          </div>
          <Handbag size={24} weight="bold" />
        </button>
      )}
    </>
  )
}
