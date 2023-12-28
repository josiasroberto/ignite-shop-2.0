'use client'

import { Handbag } from '@phosphor-icons/react'

export function AddToCartButton() {
  return (
    <button
      type="button"
      className="rounded-md bg-principal p-3 transition hover:opacity-75"
    >
      <Handbag size={24} weight="bold" className=" text-white" />
    </button>
  )
}
