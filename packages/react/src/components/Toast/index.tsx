import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useCallback } from 'react'
import { Container, Content, Description, Title } from './styles'
import { X } from 'phosphor-react'

type ToastContentProps = {
  title: string
  description: string
}

type ToastMessageProps = {
  type: 'error' | 'success'
  onClose: (() => void) | undefined
} & ToastContentProps

type useModalProps = {
  showSuccessMessage: (options: ToastContentProps) => void
  showErrorMessage: (options: ToastContentProps) => void
}

function ToastMessage({
  title,
  description,
  type,
  onClose,
}: ToastMessageProps) {
  return (
    <Container type={type}>
      <Content>
        <Title as="strong">{title}</Title>
        <Description
          as="span"
          css={{ color: type === 'error' ? '$gray100' : '$gray200' }}
        >
          {description}
        </Description>
      </Content>
      <X onClick={onClose} />
    </Container>
  )
}

export function ToastProvider() {
  return (
    <ToastContainer
      position="bottom-right"
      hideProgressBar
      toastStyle={{
        backgroundColor: 'transparent',
        padding: 0,
        margin: 0,
        boxShadow: 'none',
      }}
      bodyStyle={{
        padding: 0,
        margin: 0,
        display: 'block',
      }}
      closeButton={false}
      theme="light"
    />
  )
}

export function useToast(): useModalProps {
  const showSuccessMessage = useCallback((props: ToastContentProps) => {
    toast(({ closeToast }) => (
      <ToastMessage {...props} onClose={closeToast} type="success" />
    ))
  }, [])

  const showErrorMessage = useCallback((props: ToastContentProps) => {
    toast(({ closeToast }) => (
      <ToastMessage {...props} onClose={closeToast} type="error" />
    ))
  }, [])

  return { showSuccessMessage, showErrorMessage }
}
