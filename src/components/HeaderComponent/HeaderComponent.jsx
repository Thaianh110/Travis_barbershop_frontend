import { Badge, Col } from 'antd'
import React from 'react'
import { WrapperHeader, WrapperHeaderAccount,WrapperHeaderText, WrapperHeaderTextSmall } from './style'
import {UserOutlined,CaretDownOutlined,ShoppingCartOutlined,CalendarOutlined} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const HeaderComponent = () => {
  const navigate = useNavigate()
  const user =useSelector((state) =>  state.user)
  const handleLogin = () =>{
    navigate('/signin')
  }
  const handleHomepage = () =>{
    navigate('/')
  }
  return (
    <div>
       <WrapperHeader >
        <Col span={4}>
          <WrapperHeaderText onClick={handleHomepage}>Travis Barber Shop</WrapperHeaderText>
        </Col>
        <Col span={13}>
        <ButtonInputSearch
          size="large"
          placeholder="Bạn muốn tìm gì ?"
          textButton="Tìm kiếm"
          width="80%"
          // onSearch={onSearch}
          />
        </Col>
        <Col span={7} style={{display:"flex",gap:"24px", alignItems:"center"}}>
          <WrapperHeaderAccount>
             <UserOutlined style={{fontSize:"30px",gap:"10px"}} />
             {user?.name ? (
              <div>{user.name}</div>
             ) : (
                <div onClick={handleLogin} style={{cursor:'pointer'}}>
                  <WrapperHeaderTextSmall>Đăng nhập/Đăng Ký</WrapperHeaderTextSmall>
                  <div>
                    <WrapperHeaderTextSmall>Tài khoản</WrapperHeaderTextSmall>
                    <CaretDownOutlined />
                  </div>
                </div>
             )}
          </WrapperHeaderAccount>
          <div>
            <Badge count={6} size='small'>
            <ShoppingCartOutlined style={{fontSize:"30px",color:"#fff"}}/>
            </Badge>
            <WrapperHeaderTextSmall>Giỏ hàng</WrapperHeaderTextSmall>
          </div>
          <div>
          <CalendarOutlined style={{fontSize:"30px",color:"#fff"}} />
          <WrapperHeaderTextSmall>Đặt lịch</WrapperHeaderTextSmall>
          </div>
        </Col>
    </WrapperHeader>
    </div>
  )
}

export default HeaderComponent