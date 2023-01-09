var r=Object.defineProperty;var n=(o,a)=>r(o,"name",{value:a,configurable:!0});import{d as s,u as i,B as l,a as c}from"./index-a1d56e76.js";import{j as t}from"./jsx-runtime-da4cfb3b.js";import"./index-34e51894.js";import"./es.object.get-own-property-descriptor-64192e07.js";import"./index-75cd1920.js";const x={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react'
import {
  Box,
  ToastProvider,
  ToastContextData,
  Button,
  useToast,
} from '@nito-ui/react'
import { FC } from 'react'

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
} as Meta<ToastContextData>

const Consumer: FC = () => {
  const toast = useToast()

  return (
    <Box>
      <Button
        onClick={() =>
          toast.addToast({
            title: 'Title',
            description: 'This is a description',
          })
        }
      >
        Show Toast
      </Button>
    </Box>
  )
}

Consumer.displayName = \`
    const toast = useToast()
    <Box>
      <Button
        onClick={() =>
          toast.addToast({
            title: 'Title',
            description: 'This is a description',
          })
        }
      >
        Show Toast
      </Button>
    </Box>
\`

export const Template: Story<ToastContextData> = () => (
  <ToastProvider>
    <Consumer />
  </ToastProvider>
)
`,locationsMap:{template:{startLoc:{col:49,line:59},endLoc:{col:1,line:63},startBody:{col:49,line:59},endBody:{col:1,line:63}}}}},title:"Alerts/Toast",component:s,argTypes:{children:{table:{disable:!0}}}},e=n(()=>{const o=i();return t(l,{children:t(c,{onClick:()=>o.addToast({title:"Title",description:"This is a description"}),children:"Show Toast"})})},"Consumer");e.displayName=`
    const toast = useToast()
    <Box>
      <Button
        onClick={() =>
          toast.addToast({
            title: 'Title',
            description: 'This is a description',
          })
        }
      >
        Show Toast
      </Button>
    </Box>
`;const h=n(()=>t(s,{children:t(e,{})}),"Template"),C=["Template"];export{h as Template,C as __namedExportsOrder,x as default};
//# sourceMappingURL=Toast.stories-88021c40.js.map
