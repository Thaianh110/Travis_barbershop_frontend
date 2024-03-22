import React, { useEffect, useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assert/ImageLogin.png'
import { Image, message } from 'antd'
import {EyeFilled,EyeInvisibleFilled} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import * as UserService from "../../services/UserService"
import { useMutationHooks } from '../../hooks/useMotationHooks'
import Loading from '../../components/LoadingComponent/Loading'
// import * as Message from "../../components/Message/Message"
import {useDispatch} from "react-redux"
import { jwtDecode } from "jwt-decode";
import { updateUser } from '../../redux/Slices/UserSlice'
const SignInPage = () => {

  const [isShowPassword,setIsShowPassword] = useState(false)
  const [email,setEmail] = useState('') ;
  const [password,setPassword] = useState('');

  const dispatch =useDispatch();
  const navigate = useNavigate()
  //chuyen trang dang ky
  const handleSignUp = () =>{
    navigate('/signup')
  }
  const handleOnChangeEmail = (value) => {
    setEmail(value);
  }
  const handleOnChangePassword = (value) => {
    setPassword(value);
  }

  // dung mutation de call api
  const mutation = useMutationHooks(
   (data) => UserService.loginUser(data)
  )

  const {data,isPending}= mutation;
  useEffect(() => {
    if(data?.status === 'OK'){
      navigate('/')
      message.success()
      localStorage.setItem('access_token',JSON.stringify(data?.access_token))
      if(data?.access_token){
        const decoded =jwtDecode(data?.access_token)
        console.log('decode',decoded)
        if(decoded?.id){
          handleGetDetailsUser(decoded?.id,data?.access_token)
        }
      }
    }
  },)
  console.log('mutation',mutation);
  const handleGetDetailsUser = async (id,token)=>{
    const res = await UserService.getDetailsUser(id,token)
    dispatch(updateUser({...res?.data,access_token: token}))
  }

  const handleSignIn = (value) => {
    mutation.mutate({
      email,
      password
    })
    console.log('sign-in',email,password)
  }
 
  return (
  <div style={{display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(0,0,0,0.53)',height:'100vh'}}>
    <div style={{width:'800px',height:'445px',borderRadius:'4px',backgroundColor:'#fff',display:'flex'}}>
      <WrapperContainerLeft>
        <h1>Xin chào</h1>
        <p style={{fontSize:'16px'}}>Đăng nhập vào tài khoản</p>
        <InputForm placeholder="anhb20212@gmail.com" value={email} onChange={handleOnChangeEmail}/>
        <div style={{position:'relative'}}>
        <InputForm placeholder="password" type={ isShowPassword ? "text":"password"} value={password} onChange={handleOnChangePassword}/>
          <span onClick={() =>setIsShowPassword(!isShowPassword)} style={{zIndex:'5',position:'absolute',top:'4px',right:'8px',cursor:"pointer",fontSize:"15px"}}>
            {
              isShowPassword ? (
                <EyeFilled />
              ): 
              (
                <EyeInvisibleFilled />
              )
            }
          </span>
          
        </div>
        {data?.status === 'ERR' && <span style={{color:"red",fontSize:"14px" }}>{data?.message}</span>}
        <Loading isLoading={isPending}>
        <ButtonComponent
           disabled={!email.length || !password}
           onClick={handleSignIn}
          size={40}
          styleButton={{
            backgroundColor: 'rgb(255,57,69)',
            height: '48px',
            width: "100%",
            border: 'none',
            borderRadius: '4px',
            margin:'16px 0 10px'
          }}
          textButton={"Đăng nhập"}
          styleTextButton={{ color: '#fff', fontSize: "15px" }} >
        </ButtonComponent>
        </Loading>
        <p><WrapperTextLight>Quên mật khẩu ?</WrapperTextLight></p>
        <p style={{fontSize:"14px"}}>Chưa có tài khoản ? 
          <WrapperTextLight onClick={handleSignUp}> Tạo tài khoản</WrapperTextLight>
        </p>
      </WrapperContainerLeft>
      <WrapperContainerRight>
          <Image src={imageLogo} preview={false} width="230px" height='230px'/>
          <h2>Mua sắm tại travis barbershop</h2>
      </WrapperContainerRight>
    </div>
    </div>

  )
}

export default SignInPage