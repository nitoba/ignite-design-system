import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  background: '$gray900',
  borderRadius: '$sm',
  border: '2px solid $gray900',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular',

  '&::placeholder': {
    color: '$gray500',
  },
})
export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  background: 'transparent',
  border: 'none',
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})
