import React from 'react'

type ContainerProps ={
    // children: React.ReactNode
    styles: React.CSSProperties
}
const Container = (props: ContainerProps) => {
  return (
    <>
        {props.styles}
    </>
  )
}

export default Container