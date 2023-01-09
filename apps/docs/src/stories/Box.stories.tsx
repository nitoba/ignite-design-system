import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@nito-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o comspanonente Box</Text>,
  },

  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
