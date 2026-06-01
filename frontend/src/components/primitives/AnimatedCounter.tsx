"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  format?: (n: number) => string
  duration?: number
}

export function AnimatedCounter({ value, format, duration = 1.2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 })
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const [display, setDisplay] = useState("0")

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, motionValue, value])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      const rounded = Math.round(latest)
      setDisplay(format ? format(rounded) : String(rounded))
    })
  }, [springValue, format])

  return <span ref={ref}>{display}</span>
}

