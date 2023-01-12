import { Meta, Story } from '@storybook/react'
import { Box, ToastProvider, Button, useToast } from '@nito-ui/react'
import { FC } from 'react'

export default {
  title: 'Alerts/Toast',
  component: ToastProvider,

  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta

type ConsumerProps = {
  type: 'error' | 'success'
}

const Consumer: FC<ConsumerProps> = ({ type }) => {
  const toast = useToast()

  return (
    <Box>
      <Button
        onClick={() => {
          if (type === 'success') {
            toast.showSuccessMessage({
              title: 'Title',
              description: 'This is a description',
            })
          } else {
            toast.showErrorMessage({
              title: 'Error',
              description: 'This is a description error message',
            })
          }
        }}
      >
        Show Toast
      </Button>
    </Box>
  )
}

Consumer.displayName = `
    const toast = useToast()
    <Box>
      <Button
        onClick={() =>
          toast.addToast({
            title: 'Title',
            description: 'This is a description',
          })
        }
      >
        Show Toast
      </Button>
    </Box>
`

export const Success: Story = () => (
  <ToastProvider>
    <Consumer type="success" />
  </ToastProvider>
)

export const Error: Story = () => (
  <ToastProvider>
    <Consumer type="error" />
  </ToastProvider>
)
