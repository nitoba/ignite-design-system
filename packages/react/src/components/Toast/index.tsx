import * as ToastRdx from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import {
  ComponentProps,
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  ToastClose,
  ToastContainer,
  ToastContent,
  ToastDescription,
  ToastTitle,
} from './styles'

type ToastComponentProps = {
  title?: string
  description: string
  typeOfMessage?: 'success' | 'warning' | 'error'
} & ComponentProps<typeof ToastContainer>

type ToastContentProps = Pick<ToastComponentProps, 'title' | 'description'>

export type ToastContextData = {
  isOpen: boolean
  showToastMessage: (data: ToastContentProps) => void
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState<ToastContentProps | null>(null)
  const timerRef = useRef(0)

  const showToastMessage = useCallback(
    ({ title, description }: ToastContentProps) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }

      setContent({ title, description })

      const id = setTimeout(() => {
        setOpen(true)
      }, 2000)

      return () => {
        clearTimeout(id)
        setContent(null)
      }
    },
    [],
  )

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <ToastContext.Provider value={{ isOpen: open, showToastMessage }}>
      {children}

      <Toast
        open={open}
        onOpenChange={setOpen}
        title={content?.title}
        description={content?.description!}
      />
    </ToastContext.Provider>
  )
}

function Toast({
  title,
  description,
  typeOfMessage = 'success',
}: ToastComponentProps) {
  return (
    <ToastRdx.Provider>
      <ToastContainer>
        <ToastContent>
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription>{description}</ToastDescription>
          <ToastClose>
            <X />
          </ToastClose>
        </ToastContent>
      </ToastContainer>
      <ToastRdx.ToastViewport />
    </ToastRdx.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)

  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}
