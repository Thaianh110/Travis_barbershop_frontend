import React from 'react'
import { WrapperContent, WrapperLabelText, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'

const NavBarComponent = () => {
    const onChange = () => {}
    const renderContent = (type,options) => {
        switch (type){
            case 'text' :
                return options.map((option) =>{
                    return (
                        <WrapperTextValue>
                            {option}
                        </WrapperTextValue>
                    )
                })
            case 'checkbox' :
                    return (
                        <Checkbox.Group style={{ width: '100%',display:"flex",flexDirection:"column", gap:"12px"}} onChange={onChange}>
                            {options.map((option) => {
                                return (
                                    <Checkbox style={{marginLeft: 0}} value={option.value}>{option.label}</Checkbox>
                                )
                            })}
                        </Checkbox.Group>
                    )
            case 'star' :
                return options.map((option) => {
                        return (
                            <div style={{display:"flex", gap:"4px"}}>
                            <Rate style={{fontSize:"12px"}} disabled defaultValue={option} />
                            <span>{`tu ${option} sao`}</span>
                             </div>
                        )
                    })
            case 'price':
                return options.map((option) => {
                    return (
                        <WrapperTextPrice>{option}</WrapperTextPrice>
                    )
                })
                    
            default : 
                return{}
        }
    }
    return (
        <div>
        <WrapperLabelText>Label</WrapperLabelText>
        <WrapperContent>
            {renderContent('text',['Tu Lanh','Tivi','Maygiat'])}
            {/* {renderContent('checkbox',[
                {value: 'a', label:"A" },
                {value: 'b', label:"B" },
            ])}
            {renderContent('star',[3,4,5])}
            {renderContent('price',['duoi 50000','duoi 100000','duoi 500000'])} */}
        </WrapperContent>
           
        
        </div>
  )
}

export default NavBarComponent