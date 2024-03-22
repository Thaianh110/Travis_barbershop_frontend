import React from 'react'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavBar, WrapperProduct } from '../TypeProductPage/style'

const TypeProductPage = () => {
  const onShowSizeChange = () => {

  }
  return (
    <div>
      <Row style={{ padding: "0 120px", background: "#efefef", flexWrap: "nowrap", paddingTop: "10px" }}>
        <WrapperNavBar span={4}>
          <NavBarComponent />
        </WrapperNavBar>
        <Col span={20}>
          <WrapperProduct >
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProduct>
           
          <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={100} style={{ marginTop: "10px", textAlign: 'center' }}/>
        </Col>

      </Row>
    </div>
  )
}

export default TypeProductPage