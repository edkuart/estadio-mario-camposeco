"use client"

import { motion, useReducedMotion } from "framer-motion"

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function SectionReveal({ children, className = "", delay = 0 }: SectionRevealProps) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggeredListProps {
  children: React.ReactNode[]
  className?: string
  itemClassName?: string
  staggerDelay?: number
}

export function StaggeredList({
  children,
  className = "",
  itemClassName = "",
  staggerDelay = 0.08,
}: StaggeredListProps) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return (
      <div className={className}>
        {children.map((child, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static list
          <div key={i} className={itemClassName}>
            {child}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={className}>
      {children.map((child, i) => (
        <motion.div
          // biome-ignore lint/suspicious/noArrayIndexKey: static list
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35, delay: i * staggerDelay, ease: "easeOut" }}
          className={itemClassName}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

