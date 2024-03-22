import React, { useEffect, useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assert/ImageLogin.png'
import {EyeFilled,EyeInvisibleFilled} from '@ant-design/icons'
import { Image } from 'antd'
import { useNavigate } from 'react-router-dom'
import * as UserService from "../../services/UserService"
import { useMutationHooks } from '../../hooks/useMotationHooks'
import Loading from '../../components/LoadingComponent/Loading'
import * as message from "../../components/Message/Message"

const SignUpPage = () => {
  const navigate = useNavigate();
  const handleSignIn = () =>{
    navigate("/signin")
  }
  const [isShowPassword,setIsShowPassword] = useState(false)
  const [isShowConfirmPassword,setIsShowConfirmPassword]= useState(false)
  const [email,setEmail] = useState('')
  const handleOnChangeEmail =(value) =>{
    setEmail(value);
  }
  const [password,setPassword] = useState('')
  const handleOnChangePassword =(value) =>{
    setPassword(value);
  }
  const [confirmPassword,setConfirmPassword] = useState('')
  const handleOnChangeConfirmPassword =(value) =>{
    setConfirmPassword(value);
  }

  const mutation = useMutationHooks(
    (data) => UserService.signupUser(data)
   )

  const {data,isPending}= mutation;

  useEffect(() => {
    if(data?.status ==='success'){
      message.success()
      handleSignIn()
    }else {
      message.error()
        }
  },[])

  const handleSignUp =() =>{
    mutation.mutate({
      email,
      password,
      confirmPassword
    })
    console.log('sign up', email,password,confirmPassword)
  }

  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(0,0,0,0.53)',height:'100vh'}}>
    <div style={{width:'800px',height:'445px',borderRadius:'4px',backgroundColor:'#fff',display:'flex'}}>
      <WrapperContainerLeft>
        <h1>Xin chào</h1>
        <p style={{fontSize:'16px'}}>Đăng ký tài khoản</p>
        <InputForm placeholder="anhb20212@gmail.com" value={email} onChange={handleOnChangeEmail}/>
        <div style={{position:'relative'}}>
        <InputForm placeholder="password" type={isShowPassword ? "text": "password"} value={password} onChange={handleOnChangePassword}/>
          <span onClick={() =>setIsShowPassword(!isShowPassword)} 
          style={{zIndex:'10',position:'absolute',top:'4px',right:'8px',cursor:"pointer",fontSize:"15px"}}>
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
        <div style={{position:'relative'}}>
          <span onClick={() =>setIsShowConfirmPassword(!isShowConfirmPassword)} style={{zIndex:'10',position:'absolute',top:'4px',right:'8px',cursor:"pointer",fontSize:"15px"}}>
            {
              isShowConfirmPassword ? (
                <EyeFilled />
              ): 
              (
                <EyeInvisibleFilled />
              )
            }
          </span>
          <InputForm placeholder="confirm password" type={isShowConfirmPassword ? "text":"password"} value={confirmPassword} onChange={handleOnChangeConfirmPassword} />
        </div>
        <Loading isLoading={isPending}>
          {data?.status === 'ERR' && <span style={{color:"red"}}>{data?.message}</span>}
        <ButtonComponent
          disabled={!email.length || !password || !confirmPassword}
          onClick={handleSignUp}
          size={40}
          styleButton={{
            backgroundColor: 'rgb(255,57,69)',
            height: '48px',
            width: "100%",
            border: 'none',
            borderRadius: '4px',
            margin:'26px 0 10px'
          }}
          textButton={"Đăng ký"}
          styleTextButton={{ color: '#fff', fontSize: "15px" }} >
        </ButtonComponent>
        </Loading>
        <p style={{fontSize:"14px"}}>Bạn đã có tài khoản ? 
          <WrapperTextLight onClick={handleSignIn}> Đăng nhập ngay</WrapperTextLight>
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

export default SignUpPage