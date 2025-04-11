import { cn, formatDateFromMs } from '@renderer/utils'
import { NoteInfo } from '@shared/models'
import { ComponentProps } from 'react'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

export const NotePreview = ({
  title,
  content,
  lastEditTime,
  isActive = false,
  className,
  ...props
}: NotePreviewProps) => {
  const date = formatDateFromMs(lastEditTime)
  const [formattedDate, formattedTime] = date.split(',')

  return (
    <div
      className={cn(
        'cursor-pointer px-2.5 py-3 rounded-md transition-all duration-300 ease-in-out transform',
        {
          'bg-blue-50 border-l-4 border-blue-500 scale-[1.02] shadow-sm': isActive,
          'hover:bg-gray-100 border-l-4 border-transparent hover:scale-[1.01]': !isActive
        },
        className
      )}
      {...props}
    >
      <h3 className="mb-3 text-2xl font-bold truncate text-gray-800 transition-colors duration-300">
        {title}
      </h3>
      <div className="flex justify-end space-x-2">
        <span className="text-xs font-medium px-2 py-0.5 rounded bg-blue-100 text-blue-800 transition-colors duration-300">
          {formattedDate}
        </span>
        <span className="text-xs font-medium px-2 py-0.5 rounded bg-purple-100 text-purple-800 transition-colors duration-300">
          {formattedTime}
        </span>
      </div>
    </div>
  )
}
