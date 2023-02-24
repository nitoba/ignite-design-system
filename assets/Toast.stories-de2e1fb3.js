var d=Object.defineProperty;var n=(t,l)=>d(t,"name",{value:l,configurable:!0});import{d as s,u as r,B as e,a as i}from"./index-b4043309.js";import{a,F as c,j as o}from"./jsx-runtime-da4cfb3b.js";import"./index-34e51894.js";import"./es.object.get-own-property-descriptor-64192e07.js";import"./index-75cd1920.js";const x={parameters:{storySource:{source:`import { ComponentStory, Meta } from '@storybook/react'
import { Box, ToastProvider, Button, useToast } from '@nito-ui/react'

export default {
  title: 'Alerts/Toast',
  component: ToastProvider,

  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta

export const Success: ComponentStory<typeof Box> = () => {
  const toast = useToast()
  return (
    <>
      <ToastProvider />
      <Box>
        <Button
          onClick={() => {
            toast.showSuccessMessage({
              title: 'Title',
              description: 'This is a description',
            })
          }}
        >
          Show Toast
        </Button>
      </Box>
    </>
  )
}

export const Error: ComponentStory<typeof Box> = () => {
  const toast = useToast()
  return (
    <>
      <ToastProvider />
      <Box>
        <Button
          onClick={() => {
            toast.showErrorMessage({
              title: 'Error',
              description: 'This is a description of the error',
            })
          }}
        >
          Show Toast
        </Button>
      </Box>
    </>
  )
}
`,locationsMap:{success:{startLoc:{col:51,line:17},endLoc:{col:1,line:36},startBody:{col:51,line:17},endBody:{col:1,line:36}},error:{startLoc:{col:49,line:38},endLoc:{col:1,line:57},startBody:{col:49,line:38},endBody:{col:1,line:57}}}}},title:"Alerts/Toast",component:s,argTypes:{children:{table:{disable:!0}}}},y=n(()=>{const t=r();return a(c,{children:[o(s,{}),o(e,{children:o(i,{onClick:()=>{t.showSuccessMessage({title:"Title",description:"This is a description"})},children:"Show Toast"})})]})},"Success"),S=n(()=>{const t=r();return a(c,{children:[o(s,{}),o(e,{children:o(i,{onClick:()=>{t.showErrorMessage({title:"Error",description:"This is a description of the error"})},children:"Show Toast"})})]})},"Error"),f=["Success","Error"];export{S as Error,y as Success,f as __namedExportsOrder,x as default};
//# sourceMappingURL=Toast.stories-de2e1fb3.js.map
