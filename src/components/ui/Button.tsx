import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import React, { HTMLAttributes, ReactNode } from 'react'

type ButtonPropsType = HTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'none'
}

const buttonVariant = cva('rounded rounded-lg p-3',{
    variants: {
        variant: {
            primary: 'bg-green-500 text-white',
            secondary: 'bg-gray-400 text-white',
            none: ''
        }
    },
    defaultVariants: {
        variant: 'primary'
    }
})
const Button = ({className, variant, children, ...props }: ButtonPropsType) => {
    return (
        <button 
            className={clsx(buttonVariant({variant}), className)} 
            {...props}
         >
            {children}
        </button>
    )
}

export default Button