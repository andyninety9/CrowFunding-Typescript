import { ElementType, useState } from 'react'
import { flip, offset, shift, useFloating } from '@floating-ui/react'
import { useHover, useInteractions, safePolygon } from '@floating-ui/react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'

interface Props {
  className?: string
  as?: ElementType
  children?: React.ReactNode
  renderPopover?: React.ReactNode
}

export default function Popover({ className, as: Element = 'div', children, renderPopover }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const { refs, floatingStyles, context } = useFloating({
    placement: 'bottom-end',
    middleware: [offset(20), flip(), shift()],
    open: isOpen,
    onOpenChange: setIsOpen
  })

  const hover = useHover(context, {
    handleClose: safePolygon()
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([hover])

  return (
    <Element className={className} ref={refs.setReference} {...getReferenceProps()}>
      {children}
      {isOpen && (
        <div
          {...getFloatingProps()}
          ref={refs.setFloating}
          className='z-1 relative flex flex-col rounded-md bg-[#f1fbf7] p-3 shadow-lg'
          style={floatingStyles}
        >
          <span className='absolute right-0 top-0 z-[-1] translate-y-[-55%]'>
            <ArrowDropUpIcon
              sx={{
                fontSize: '50px',
                color: '#f1fbf7'
              }}
            />
          </span>
          {renderPopover}
        </div>
      )}
    </Element>
  )
}
