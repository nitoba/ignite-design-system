import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', gap: '$2' }}>
          {Story()}
          <Text size={'sm'}>Accept term of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {
  args: {
    placeholder: 'Type your any observations',
  },
}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
