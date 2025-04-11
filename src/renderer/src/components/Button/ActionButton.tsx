import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type ActionButtonProps = ComponentProps<'button'>

export const ActionButton = ({ className, children, ...props }: ActionButtonProps) => {
  return (
    <button
      className={twMerge(
        'px-3 py-2 rounded-md bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200 shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
