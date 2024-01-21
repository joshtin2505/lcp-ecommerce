import React from "react"
import {tv} from 'tailwind-variants'
type Size = 'sm' | 'md' | 'lg'
type ButtonProps = {
    type: 'primary' | 'secondary',
    size: Size,
    children: React.ReactNode
} | {
    type: 'icon'
    size: Size,
    children: React.ReactNode
}
function Button({type, children, size}: ButtonProps) {
    const button = tv({
        base: 'flex items-center justify-center rounded-sm ',
        variants:{
            size: {
                sm: 'h- px-4',
                md: 'h-10 px-6',
                lg: 'h-12 px-8'
            }
        },
        defaultVariants:{

        }
    })
    if (type === 'primary'){
        return (
            <button className="">{children}</button>
          )
    }
    else if (type === 'secondary'){
        return (
            <button className="">{children}</button>
          )
    }
    if (type === 'icon'){
        return (
            <button className="">{children}</button>
          )
    }
}

export default Button