import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export type TextInputProps = {
  prefix?: string
  size?: ComponentProps<typeof TextInputContainer>['size']
} & Omit<ComponentProps<typeof Input>, 'size'>

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, size, ...props }, ref) => {
    return (
      <TextInputContainer size={size}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)
TextInput.displayName = 'TextInput'
