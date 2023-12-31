'use client'

import './styles.css'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AddToCartButton } from '../add-to-cart-button'

export function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    mode: 'free-snap',
    slides: {
      origin: 'center',
      perView: 2,
      spacing: 48,
    },

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div className="navigation-wrapper">
        <div className="absolute z-10 h-card w-34 bg-gradient-to-l from-background/0  to-background/100" />
        <div className="absolute right-0 z-10 h-card w-34 bg-gradient-to-r from-background/0  to-background/100" />

        <div ref={sliderRef} className="keen-slider">
          <Link
            href="/"
            className="keen-slider__slide group relative flex h-card w-card items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#1ea483] to-[#7465d4]"
          >
            <Image
              className="object-cover"
              src="/camisetas/1.png"
              width={696}
              height={656}
              quality={100}
              alt=""
            />

            <footer className="absolute bottom-1 left-1 right-1 flex translate-y-32 items-center justify-between rounded-md bg-bg-footer-card p-8 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
              <div className="flex flex-col">
                <strong className="text-xl leading-[160%] text-title">
                  Camiseta Beyond the Limits
                </strong>
                <span className="text-2xl font-bold leading-[140%] text-light">
                  R$ 79,90
                </span>
              </div>
              <AddToCartButton />
            </footer>
          </Link>
          <Link
            href="/"
            className="keen-slider__slide group relative flex h-card w-card items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#1ea483] to-[#7465d4]"
          >
            <Image
              className="object-cover"
              src="/camisetas/1.png"
              width={696}
              height={656}
              quality={100}
              alt=""
            />

            <footer className="absolute bottom-1 left-1 right-1 flex translate-y-32 items-center justify-between rounded-md bg-bg-footer-card p-8 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
              <div className="flex flex-col">
                <strong className="text-xl leading-[160%] text-title">
                  Camiseta Beyond the Limits
                </strong>
                <span className="text-2xl font-bold leading-[140%] text-light">
                  R$ 79,90
                </span>
              </div>
              <AddToCartButton />
            </footer>
          </Link>
          <Link
            href="/"
            className="keen-slider__slide group relative flex h-card w-card items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#1ea483] to-[#7465d4]"
          >
            <Image
              className="object-cover"
              src="/camisetas/1.png"
              width={696}
              height={656}
              quality={100}
              alt=""
            />

            <footer className="absolute bottom-1 left-1 right-1 flex translate-y-32 items-center justify-between rounded-md bg-bg-footer-card p-8 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
              <div className="flex flex-col">
                <strong className="text-xl leading-[160%] text-title">
                  Camiseta Beyond the Limits
                </strong>
                <span className="text-2xl font-bold leading-[140%] text-light">
                  R$ 79,90
                </span>
              </div>
              <AddToCartButton />
            </footer>
          </Link>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabled = props.disabled ? ' arrow--disabled' : ''
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
