import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import React, { InputHTMLAttributes } from 'react'

type InputPropsType = InputHTMLAttributes<HTMLInputElement>

const inputVariant = cva('bg-black rounded rouned-lg p-3 text-white placeholder-white')

const Input = ({className, ...props}: InputPropsType) => {
  return (
    <input 
        className={clsx(inputVariant(),className)} 
        {...props}
    />
  )
}

export default Input