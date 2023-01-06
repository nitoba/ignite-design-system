import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  background: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  border: '2px solid $gray900',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'baseline',
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  width: '100%',
  minHeight: '80px',

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export type TextAreaProps = ComponentProps<typeof TextArea> & {
  as?: ElementType
}

TextArea.displayName = 'TextArea'
