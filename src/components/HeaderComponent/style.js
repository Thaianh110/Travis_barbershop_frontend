import styled from "styled-components"
import { Row } from "antd"
export const WrapperHeader = styled(Row)`
    padding: 10px 50px;
    background-color: blue;
    align-items:center;
    gap:16px;
    flex-wrap: nowrap;
`
export const WrapperHeaderText = styled.span`
    font-size : 18px;
    font-weight: bold;
    color : #fff;
    cursor: pointer;
`
export const WrapperHeaderAccount = styled.div `
    display:flex;
    align-items: center;
    color: #fff;
    gap: 10px;
    font-size:12px;
`
export const WrapperHeaderTextSmall = styled.span`
    font-size:12px;
    color: #fff;
    white-space:nowrap;
`
export const WrapperHeaderIcon = styled.span`
    font-size: 30px;
    color: #fff;
`
export const WrapperHeaderShoppingCart = styled.div `
    display:flex;
    align-items: center;
    color: #fff;
    gap: 10px;
    font-size:12px;
`
export const WrapperHeaderCol = styled.col `
    display:flex;
`