import React from 'react'
type HeadingProp = {
    children : React.ReactNode;
}
const Heading = (props: HeadingProp)=> {
  return (
    <div>{props.children}</div>
  )
}

export default Heading