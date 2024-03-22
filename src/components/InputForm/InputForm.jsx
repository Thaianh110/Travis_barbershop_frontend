
import React from 'react'
import { WrapperInputStyle } from './style'

const InputForm = (props) => {
    const {placeholder ="Nhap ho ten",...rests} = props
    const handleInputOnChange = (e)=>{
      props.onChange(e.target.value)
      console.log('value',e.target.value)
    }
  return (
    <div>
        <WrapperInputStyle placeholder={placeholder} valueinput={props.value} {...rests} onChange={handleInputOnChange}/> 
    </div>
    
  )
}

export default InputForm