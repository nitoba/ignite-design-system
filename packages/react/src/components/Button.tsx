import { styled } from '../styles'
import { ComponentProps, ElementType } from 'react'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '$:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$ignite500',
        color: '$white',
        transition: 'all 0.2s',
        '&:not(disabled):hover': {
          backgroundColor: '$ignite300',
        },
        '$:disabled': {
          backgroundColor: '$gray200',
        },
      },
      secondary: {
        border: '2px solid $ignite500',
        color: '$ignite300',

        transition: 'all 0.2s',
        '&:not(disabled):hover': {
          backgroundColor: '$ignite500',
          color: '$white',
        },

        '$:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },
      tertiary: {
        color: '$gray100',
        transition: 'all 0.2s',
        '&:not(disabled):hover': {
          opacity: 0.6,
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ButtonProps = ComponentProps<typeof Button> & {
  as?: ElementType
}

Button.displayName = 'Button'
