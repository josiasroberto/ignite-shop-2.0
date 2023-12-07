'use client'

import { Handbag } from '@phosphor-icons/react'

export function AddToCartButton() {
  return (
    <button
      type="button"
      className="bg-principal p-3 rounded-md transition hover:opacity-75"
    >
      <Handbag size={24} weight="bold" className=" text-white" />
    </button>
  )
}
