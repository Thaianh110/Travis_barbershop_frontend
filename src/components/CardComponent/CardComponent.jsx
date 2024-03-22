// import { Card} from 'antd'kk
// import Meta from 'antd/es/card/Meta'
import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './style'
import {StarFilled} from '@ant-design/icons'
const CardComponent = () => {
  return (
    <WrapperCardStyle
        hoverable
        style={{ width: 200}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
        <StyleNameProduct>Iphone</StyleNameProduct>
        <WrapperReportText>
            <span>
            <span>4.95</span><StarFilled style={{fontSize:"12px",color:"yellow"}}/>
            </span>
            <span>| Đã bán 1000+</span>
        </WrapperReportText>
        <WrapperPriceText>
            1.000.000 VND
            <WrapperDiscountText>-5%</WrapperDiscountText>
        </WrapperPriceText>
  </WrapperCardStyle>
  )
}

export default CardComponent