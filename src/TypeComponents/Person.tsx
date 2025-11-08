import React from 'react'

type PersonProp ={
    namea : {
        name: string
        lastname : string
    }
}
const Person = (props: PersonProp) => {
  return (
    <h1>I am a {props.namea.lastname}   </h1>
  )
}

export default Person