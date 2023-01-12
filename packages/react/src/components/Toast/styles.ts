import { styled } from '../../styles'
import { Text } from '../Text'

export const Container = styled('div', {
  padding: '$3 $5',
  borderRadius: '$md',
  border: '1px solid $gray600',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  svg: {
    width: '$5',
    height: '$5',
    color: '$gray200',
    cursor: 'pointer',
    transition: 'opacity 0.3s',

    '&:hover': {
      opacity: 0.7,
    },
  },

  variants: {
    type: {
      success: {
        backgroundColor: '$gray800',
      },
      error: {
        backgroundColor: '#DB4437',
      },
    },
  },

  defaultVariants: {
    type: 'success',
  },
})
export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

export const Title = styled(Text, {
  color: '$white',
  fontSize: '$lg !important',
})

export const Description = styled(Text, {
  fontSize: '$xs !important',
})
