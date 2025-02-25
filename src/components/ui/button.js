import React from "react"

export function Button({ children, variant = "default", className = "", ...props }) {
  const baseStyle = "px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variantStyles = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-300 hover:bg-gray-50",
    ghost: "hover:bg-gray-100",
    link: "text-blue-500 hover:underline",
  }

  const combinedClassName = `${baseStyle} ${variantStyles[variant]} ${className}`

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  )
}

