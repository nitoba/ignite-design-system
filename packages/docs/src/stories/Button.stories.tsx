import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@nito-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },

  argTypes: {
    variant: {
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'radio',
      },
    },

    size: {
      defaultValue: 'md',
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },

    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create New',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next step
        <ArrowRight weight="bold" />
      </>
    ),
  },

  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
