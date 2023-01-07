import { StoryObj, Meta, ComponentStory } from '@storybook/react'
import { Box, ToastProvider, ToastContextData, Button } from '@nito-ui/react'

export default {
  title: 'Surfaces/ToastProvider',
  component: ToastProvider,

  args: {},

  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ToastContextData>

export const Toast: ComponentStory<typeof ToastContextData> = ({ ...args }) => {
  return (
    <ToastProvider {...args}>
      <Box css={{ display: 'flex', gap: '$2' }}>
        <Button onClick={() => {}}>Open</Button>
      </Box>
    </ToastProvider>
  )
}
