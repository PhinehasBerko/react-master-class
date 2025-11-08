import React, { type JSX } from 'react'

type PersonsProp = {
    person: {
        id: number
        name: string
        age: number
    }[]
}


const PersonList = (props: PersonsProp): JSX.Element => {
    
  return (
    <>
        {
            props.person.map((person)=>{
                return <h2 key={person.id }>I am {person.name}, {person.age} of age.</h2>
            })
        }    
    </>
  )
}

export default PersonList