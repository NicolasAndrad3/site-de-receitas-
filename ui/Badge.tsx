import React from "react"
import { cn } from "../lib/Utils"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-orange-500 text-white",
    secondary: "bg-zinc-700 text-white",
    outline: "border border-white/20 text-white"
  }

  return (
    <span className={cn("text-xs font-medium px-3 py-1 rounded-full", variants[variant], className)} {...props} />
  )
}
