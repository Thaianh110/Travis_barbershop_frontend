import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display:flex;
    align-items: center;
    gap: 20px;
    justify-content: flex-start;
    height:44px
`
export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover{
        color: #fff;
        background-color:rgb(13,92,182);
        span {
            color: #fff;
        }
    }
`
export const WrapperProduct = styled.div`
    display:flex;
    gap:15px;
    margin-top:20px;
    flex-wrap:wrap;
`