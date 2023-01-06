import { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@ignite-ui/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],

  args: {
    size: 4,
    currentStep: 1,
  },
} as Meta<MultiStepProps>

export const Default: StoryObj<MultiStepProps> = {}
export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
