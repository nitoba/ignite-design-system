import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import { CheckboxContainer, CheckboxIndicator } from './styles'

export type CheckboxProps = ComponentProps<typeof CheckboxContainer>

Checkbox.displayName = 'Checkbox'

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}
