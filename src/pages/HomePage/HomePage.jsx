import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import {WrapperButtonMore, WrapperProduct, WrapperTypeProduct} from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import Slider1 from '../../assert/Slider1.png'
import Slider2 from '../../assert/Slider2.jpeg'
import Slider3 from '../../assert/Slider3.jpg'
import CardComponent from '../../components/CardComponent/CardComponent'
// import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
// import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
// import { Slider } from 'antd'
const HomePage = () => {
  const arr=['TV','Tu Lanh','LapTop']
  return (
    <>
    <div style={{padding:"0 50px"}}>
      <WrapperTypeProduct>
      {arr.map((item) => {
        return (
          <TypeProduct name={item} key={item} />
        )
      })}
      </WrapperTypeProduct>
      <div id="container" style={{backgroundColor: '#efefef',padding:"0 80px",height:"1000px"}}>
        <SliderComponent arrImages={[Slider1,Slider2,Slider3]} />
        <WrapperProduct>
            <CardComponent /> 
            <CardComponent />  
            <CardComponent />  
            <CardComponent />   
            <CardComponent /> 
            <CardComponent /> 
            </WrapperProduct>
      <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"10px"}}>
        <WrapperButtonMore textButton="Xem thêm" type="outline" styleButton={{
            border:"1px solid rgb(11,116,229)",color:"rgb(11,116,229)",
            width:"200px", height:"38px",borderRadius:"4px"} 
            }
            styleTextButton={{fontWeight:500}}/>     
      </div>
      </div>
  
    </div>
    </>
  )
}

export default HomePage