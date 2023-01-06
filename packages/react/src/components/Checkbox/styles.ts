import * as Checkbox from '@radix-ui/react-checkbox'
import { keyframes, styled } from '../../styles'

const slideIn = keyframes({
  from: { opacity: 0, transform: 'scale(2)' },
  to: { opacity: 1, transform: 'scale(1)' },
})

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  lineHeight: 0,
  borderRadius: '$xs',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid transparent',
  overflow: 'hidden',
  transition: 'background 0.25s',

  '&:focus': {
    border: '2px solid $ignite300',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  width: '$4',
  height: '$4',
  color: '$white',
  animation: `${slideIn} 0.25s`,
})
