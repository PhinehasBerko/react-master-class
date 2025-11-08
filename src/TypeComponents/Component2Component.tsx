import React from 'react'

type Comp2CompProp = {
  children: React.ReactNode
}
const Component2Component = (props: Comp2CompProp) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Component2Component