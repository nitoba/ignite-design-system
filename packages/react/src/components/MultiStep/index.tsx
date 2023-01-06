import { ComponentProps } from 'react'
import { Label, MultiStepContainer, Step, Steps } from './styles'

export type MultiStepProps = {
  size: number
  currentStep?: number
} & ComponentProps<typeof MultiStepContainer>

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Step {currentStep} of {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <Step key={step} active={currentStep >= step} />
        ))}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
