import React, { useReducer } from 'react'

type CounterState =  {
    count : number
}

type UpdateAction = {
    type: "increment" | "decrement"| 'reset'
    payload: number
}
type ResetAction ={
    type : 'reset'
}
type CounterAction = UpdateAction | ResetAction  // Discriminated Unions
const initialState ={
    count : 0
}

function reducer(state: CounterState, action: CounterAction) {
    switch(action.type){
        case 'increment':
            return {count: state.count + action.payload};
        case 'decrement':
            return {count: state.count - action.payload};
        case 'reset':
            return initialState
        default:
            return state


    }
}
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
       <p>Count - {state.count}</p> 
       <button onClick={()=>dispatch({type:"increment", payload: 10})}>Increment</button>
       <button onClick={()=>dispatch({type:"decrement", payload: 5})}>Decrement</button>
       <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </>
  )
}

export default Counter