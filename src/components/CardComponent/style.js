import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
    width:200px;
    margin-top:10px;
    & img {
        height:200px;
        width:150px;
    };
    & .ant-card-body {
        padding: 10px;
    }

`

export const StyleNameProduct= styled.div `
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgb(56,56,61) ;
    margin:8px 0;
`
export const WrapperReportText= styled.div`
    font-size: 11px;
    color: rgb(128,128,137);
    display:flex;
    align-items:center;
    margin: 8px 0;
`
export const WrapperPriceText= styled.div`
    color: rgb(256,66,78);
    font-size: 16px;
    font-weight:500;
    margin: 8px 0;
`
export const WrapperDiscountText= styled.span`
    color: rgb(256,66,78);
    font-size: 12px;
    font-weight:500;

`