import React from 'react';
import styled from 'styled-components';
import ImgSrc from '../img/image.png'
import {Img} from './Img.styled';
import {Tittle} from './title.styled';
import {SubText} from './SubText.styled';
import {Btn} from './Button.styled';

export const Card = () => {
    return (
        <CardStyle>
            <Img src={ImgSrc}/>
            <Tittle>Headline</Tittle>
            <SubText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</SubText>
            <ButtonsBlock>
                <Btn>See more</Btn>
                <Btn color={'#4E71FE'} backgroundColor={'transparent'}>Save</Btn>
            </ButtonsBlock>


        </CardStyle>
    );
};

export default Card;

const CardStyle = styled.div`
    border: none;
    border-radius:15px ;
    background-color: snow;
    width: 300px;
    height: 350px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 20px 20px 0 20px;
`
const ButtonsBlock = styled.div`
    display: flex;
    button+button{
        margin: 0 0 0 12px;
    }
`

