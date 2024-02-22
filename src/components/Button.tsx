import React from "react"
import { tv } from "tailwind-variants"
type Size = "sm" | "md" | "lg" | "xl"
type Rounded = "none" | "sm" | "md" | "lg" | "full"
type Weight = "light" | "normal" | "medium" | "semibold" | "bold"
type ButtonProps = {
  type: "primary" | "secondary" | "icon"
  size: Size
  rounded: Rounded
  children: React.ReactNode
  className?: string
  weight?: Weight
}
function Button({
  type,
  children,
  size,
  className = "",
  rounded,
  weight,
}: ButtonProps) {
  const button = tv({
    base: "flex items-center justify-center rounded-sm overflow-hidden transition-all ",
    variants: {
      size: {
        sm: "w-13 h-3 text-md ",
        md: "w-26 h-6 text-base",
        lg: "w-39 h-9 text-lg",
        xl: "h-12 w-52 text-xl",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      weight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      rounded: "sm",
      size: "md",
      weight: "normal",
    },
  })
  const iconButton = tv({
    base: "flex items-center justify-center rounded-sm ",
    variants: {
      size: {
        sm: "h-8 ",
        md: "h-10 w-40 text-lg",
        lg: "h-12 w-52 text-xl",
        xl: "h-12 w-52 text-xl",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {},
  })
  if (type === "primary") {
    return (
      <button className={button({ size, rounded, weight, className })}>
        {children}
      </button>
    )
  } else if (type === "secondary") {
    return (
      <button className={button({ size, rounded, weight, className })}>
        <span className="w-full h-full flex justify-center items-center">
          {children}
        </span>
      </button>
    )
  } else if (type === "icon") {
    return (
      <button className={iconButton({ size, rounded, className })}>
        {children}
      </button>
    )
  }
}

export default Button
