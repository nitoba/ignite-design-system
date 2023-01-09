import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'

import { v4 as uuid } from 'uuid'

import { ToastProvider as RadixToastProvider } from '@radix-ui/react-toast'

import {
  ToastClose,
  ToastContainer,
  ToastContent,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'

type ToastProviderProps = {
  children: ReactNode
}

type ToastMessage = {
  id: string
  type?: 'success' | 'error'
  title?: string
  description: string
}

export type IToastMessage = Omit<ToastMessage, 'id'>

export type ToastContextData = {
  addToast(message: IToastMessage): void
  removeToast(id: string): void
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

export function ToastProvider({ children }: ToastProviderProps) {
  const [messages, setMessages] = useState<ToastMessage[]>([])

  const addToast = useCallback(
    ({ type, title, description }: IToastMessage) => {
      const id = uuid()

      const toast = {
        id,
        type,
        title,
        description,
      }

      setMessages((state) => [...state, toast])
    },
    [],
  )

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <RadixToastProvider>
        <ToastViewport />
        {messages.map((message) => (
          <Toast
            key={message.id}
            id={message.id}
            title={message.title}
            description={message.description}
            type={message.type}
          />
        ))}

        {children}
      </RadixToastProvider>
    </ToastContext.Provider>
  )
}

function Toast({ title, description }: ToastMessage) {
  return (
    <ToastContainer>
      <ToastContent>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </ToastContent>
      <ToastClose>
        <X />
      </ToastClose>
    </ToastContainer>
  )
}

export function useToast(): ToastContextData {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error(`useToast must be used within an ToastProvider`)
  }

  return context
}
