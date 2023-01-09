import { Meta, Story } from '@storybook/react'
import {
  Box,
  ToastProvider,
  ToastContextData,
  Button,
  useToast,
} from '@nito-ui/react'
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
} as Meta<ToastContextData>

const Consumer: FC = () => {
  const toast = useToast()

  return (
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

export const Template: Story<ToastContextData> = () => (
  <ToastProvider>
    <Consumer />
  </ToastProvider>
)
