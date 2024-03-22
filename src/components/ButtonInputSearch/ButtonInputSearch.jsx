
import React from 'react'
import {SearchOutlined} from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
const ButtonInputSearch = (props) => {
    const {size,placeholder,textButton,backgroundColorInput='#fff',backgroundColorButton='rgb(13,92,182',colorButton="#fff"} =props;
  return (
    <div style={{display:"flex"}}>
        <InputComponent 
            size={size}
            placeholder={placeholder} 
            style={{backgroundColor:backgroundColorInput}}/>
        <ButtonComponent 
            size={size} 
            styleButton={{backgroundColor:backgroundColorButton}} 
            icon={<SearchOutlined color={colorButton} />}
            textButton={textButton}
            styleTextButton={{color:colorButton}}
            >
        </ButtonComponent>
    </div>
  )
}   

export default ButtonInputSearch