import { ComponentStory, Meta } from '@storybook/react'
import { Box, ToastProvider, Button, useToast } from '@nito-ui/react'

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

export const Success: ComponentStory<typeof Box> = () => {
  const toast = useToast()
  return (
    <>
      <ToastProvider />
      <Box>
        <Button
          onClick={() => {
            toast.showSuccessMessage({
              title: 'Title',
              description: 'This is a description',
            })
          }}
        >
          Show Toast
        </Button>
      </Box>
    </>
  )
}

export const Error: ComponentStory<typeof Box> = () => {
  const toast = useToast()
  return (
    <>
      <ToastProvider />
      <Box>
        <Button
          onClick={() => {
            toast.showErrorMessage({
              title: 'Error',
              description: 'This is a description of the error',
            })
          }}
        >
          Show Toast
        </Button>
      </Box>
    </>
  )
}
