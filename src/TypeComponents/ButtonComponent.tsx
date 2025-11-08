import React from 'react'

type ButtonProp = {
    handleClick? :  () => void;//  for buttons which do not return object value
    handleClicked : (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const ButtonComponent = (prop: ButtonProp) => {
  return (
    <button onClick={prop.handleClicked} >
        Submit Doc
    </button>
  )
}

export default ButtonComponent