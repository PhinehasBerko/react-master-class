import React from 'react'

type GreetProp = {
    name : string;
    messageCount: number;
    isLogin : boolean

}
const Greetings = (props: GreetProp) => {
    const {name, messageCount, isLogin} = props
  return (
   <h1>
    {isLogin ?`Greetings,${name}, you have ${messageCount} unread messages `:"Welcome Guest"}
   </h1>
  )
}

export default Greetings