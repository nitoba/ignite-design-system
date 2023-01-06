import {
  TooltipArrow,
  TooltipPortal,
  TooltipProvider,
} from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { TooltipContainer, TooltipContent, TooltipTrigger } from './styles'

export type TooltipProps = {
  children: ReactNode
  content: ReactNode
}

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipContainer>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipContainer>
    </TooltipProvider>
  )
}
