import { Col, Row, Image } from 'antd'
import React from 'react'
import ButtonComponent from "../ButtonComponent/ButtonComponent"
import imageProduct from '../../assert/test.jpg'
import imageProductsmall from '../../assert/test.jpg'
import { WrapperStyleImage, WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleTextSell, WrapperPriceProduct, WrapperPriceTextProduct, WrapperAddressProduct, WrapperNumberProduct, WrapperInputNumber } from './style'
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons'



const ProductDetailComponent = () => {
    const onChange = () => {

    }
    return (
        <Row style={{ padding: "16px", background: "#fff" }}>
            <Col span={10} style={{borderRight:'1px solid #e5e5e5',paddingRight:"8px",borderRadius:"1px"}}>
                <Image src={imageProduct} alt="image product" preview={false} />
                <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImage src={imageProductsmall} alt="image small" preview="false" />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImage src={imageProductsmall} alt="image small" preview="false" />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImage src={imageProductsmall} alt="image small" preview="false" />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImage src={imageProductsmall} alt="image small" preview="false" />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImage src={imageProductsmall} alt="image small" preview="false" />
                    </WrapperStyleColImage>
                    {/* <WrapperStyleColImage span={4}>
                    <WrapperStyleImage src={imageProductsmall} alt="image small" preview="false"/>
                </WrapperStyleColImage> */}
                </Row>
            </Col>
            <Col span={14} style={{paddingLeft:"10px"}}>
                <WrapperStyleNameProduct>Sáp vuốt Tóc ClayWax Galzen </WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
                    <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
                    <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
                    <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
                    <span>(Xem 10 đánh giá )</span>
                    <WrapperStyleTextSell>| Đã bán 35</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAddressProduct>
                    <span>Giao đến </span>
                    <span className='address'>16 Nguyễn Ngọc Trai, P. Xuân Khánh, Ninh kiều, Cần Thơ </span>
                    <span className='change-address'>Đổi địa chỉ</span>
                </WrapperAddressProduct>
                <div style={{margin:"10px 0 20px",padding:"10px 0",borderTop:"1px solid #e5e5e5",borderBottom:"1px solid #e5e5e5"}}>
                    <div style={{marginBottom:"10px"}}>Số lượng</div>
                    <WrapperNumberProduct>
                        <button style={{border:"none",background:'transparent'}}>
                            <PlusOutlined style={{ color: "#000", fontSize: "16px" }} />
                        </button>

                        <WrapperInputNumber style={{ width: "60px",borderRadius:"0px" }} defaultValue={3} onChange={onChange} size='small' />

                        <button style={{border:"none",background:'transparent'}}>
                            <MinusOutlined style={{ color: "#000", fontSize: "16px" }} />
                        </button>

                    </WrapperNumberProduct>

                </div>
                <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                    <ButtonComponent
                        size={20} 
                        styleButton={{
                            backgroundColor:'rgb(255,57,69)',
                            height:'48px',
                            width:"220px",
                            border:'none',
                            borderRadius:'4px' }} 
                        textButton={"Chọn mua"}
                        styleTextButton={{color:'#fff',fontSize:"15px"}} >
                    </ButtonComponent>
                    <ButtonComponent
                        size={20} 
                        styleButton={{
                            backgroundColor:'#fff',
                            height:'48px',
                            width:"220px",
                            border:'1px solid rgb(13,92,182)',
                            borderRadius:'4px' }} 
                        textButton={"Thêm vào giỏ hàng"}
                        styleTextButton={{color:'rgb(13,92,182)',fontSize:"15px"}} >
                    </ButtonComponent>
                </div>
            </Col>

        </Row>
    )
}

export default ProductDetailComponent