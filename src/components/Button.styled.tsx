import styled from 'styled-components';
type BtnProps = {
    color?:string
    backgroundColor?:string
}
export const Btn =styled.button<BtnProps>`
    border-radius: 5px;
    font-weight: 700;
    color: ${props=>props.color||'snow'};
    border: 2px solid #4E71FE;
    padding: 4px 20px;
    background-color: ${props=>props.backgroundColor || '#4E71FE'};

`