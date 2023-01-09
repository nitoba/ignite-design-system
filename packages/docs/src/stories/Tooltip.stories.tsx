import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Tooltip, TooltipProps } from '@nito-ui/react'

export default {
  title: 'Alerts/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => {
      return <Box css={{ display: 'flex', gap: '$2' }}>{Story()}</Box>
    },
  ],

  args: {
    children: (
      <Box css={{ background: '$gray600' }}>
        <Text>Open Tooltip</Text>
      </Box>
    ),
    content: <Text>Here is tooltip content</Text>,
  },

  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TooltipProps>

export const Default: StoryObj<TooltipProps> = {}
