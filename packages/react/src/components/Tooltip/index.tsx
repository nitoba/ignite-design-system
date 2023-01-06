import {
  TooltipArrow,
  TooltipPortal,
  TooltipProvider,
} from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { TooltipContainer, TooltipContent, TooltipTrigger } from './styles'

export type TooltipProps = {
  children: ReactNode
  content: ReactNode
} & ComponentProps<typeof TooltipContent>

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipContainer>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent {...props}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipContainer>
    </TooltipProvider>
  )
}
