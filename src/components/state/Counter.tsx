import { useReducer } from "react"
type CounterState = {
    count : number
}
type UpdateAction ={
    type: 'increment' | 'decrement'
    payload : number
}
type ResetAction ={
    type: 'reset'
  
}
type CounterAction = UpdateAction | ResetAction
   
const initialState = { count: 0}
function reducer(state: CounterState, action: CounterAction){
    switch(action.type)
    {
        case 'increment':
            return{ count: state.count + action.payload}
        case 'decrement':
            return{ count: state.count - action.payload}
        case 'reset':
            return initialState
        default:
            return state
    }
}
export const Counter = () => {
    const[state,dispath] =  useReducer(reducer, initialState)
    return (
        <div>
            Count: {state.count}  <br></br>
            <button onClick={() => dispath({type : 'increment', payload: 10})}> UP</button> 
            Increment 10
            <br></br>    <button onClick={() => dispath({type : 'decrement', payload: 10})}> DOWN</button>
            Decrement 10
            <br></br> <button onClick={() => dispath({type : 'reset'})}> RESET</button> 
        </div>
    )
}