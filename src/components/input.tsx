import React from "react"
type InputProps = {
    value: string 
    handleChange: (Event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input =(props: InputProps)=>{
    const handleInputChange = (Event: React.ChangeEvent<HTMLInputElement>) => { console.log (Event)}
    return (
        <input type='text' value={props.value} onChange={props.handleChange} ></input>
    )
}