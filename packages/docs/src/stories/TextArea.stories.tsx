import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@nito-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$1' }}
        >
          <Text size={'sm'}>Message</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Default: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type your any observations',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
